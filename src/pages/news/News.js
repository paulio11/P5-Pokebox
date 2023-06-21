import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Bootstrap
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
// Contexts
import { useSetCurrentNotification } from "../../contexts/NotificationContext";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// API
import { axiosReq } from "../../api/AxiosDefaults";
// Components
import LoadingText from "../../components/LoadingText";
import NewsItem from "./NewsItem";
import Announcement from "./Announcement";
import NewAnnouncementForm from "./NewAnnouncementForm";
import InfiniteScroll from "react-infinite-scroll-component";
// Hooks
import useTitle from "../../hooks/useTitle";
// Utils
import { fetchMoreData } from "../../utils/Utils";

const News = () => {
  const setCurrentNotification = useSetCurrentNotification();
  const currentUser = useCurrentUser();
  const is_staff = currentUser?.is_staff;
  const navigate = useNavigate();
  const { id } = useParams();

  // State variables.
  const [news, setNews] = useState({});
  const [announcements, setAnnouncements] = useState({});
  const [newsLoaded, setNewsLoaded] = useState(false);
  const [announceLoaded, setAnnounceLoaded] = useState(false);
  const [showAnnoucementForm, setShowAnnouncementForm] = useState(false);
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");

  useTitle("News");

  // useEffect to fetch announcements.
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const { data } = await axiosReq.get("announcements/");
        setAnnouncements(data);
        setAnnounceLoaded(true);
      } catch (error) {
        setCurrentNotification(
          "An error occurred while attempted to load announcements. Please try again."
        );
      }
    };

    setAnnounceLoaded(false);
    fetchAnnouncements();
  }, [setCurrentNotification]);

  // useEffect to fetch news items.
  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = "news/";
        if (id) {
          url += `?id=${id}`;
        }
        if (category && !query && !id) {
          url += `?category=${category}`;
        }
        if (query && !category && !id) {
          url += `?search=${query}`;
        }
        if (query && category && !id) {
          url += `?category=${category}&search=${query}`;
        }
        const { data } = await axiosReq.get(url);
        setNews(data);
        setNewsLoaded(true);
      } catch (error) {
        setCurrentNotification(
          "An error occurred while attempting to load news items. Please try again."
        );
      }
    };

    const queryTimer = setTimeout(() => {
      fetchNews();
    }, 1000);

    return () => {
      clearTimeout(queryTimer);
    };
  }, [setCurrentNotification, category, query, id]);

  // Handles search form change.
  const handleChange = (event) => {
    setQuery(event.target.value);
    setNewsLoaded(false);
  };

  // Handles category change.
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setNewsLoaded(false);
  };

  // Prevents refresh of page when enter is pressed in search field.
  const preventSubmit = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  // Navigates user to all news.
  const handleViewAll = () => {
    setNewsLoaded(false);
    navigate("/news");
  };

  return (
    <>
      <Row>
        <Col xs={12} lg={4} className="mb-5">
          <div className="d-flex align-items-center justify-content-between">
            <h1>Updates</h1>
            {is_staff && (
              <>
                {/* New announcement button and form */}
                <Button
                  variant="dark"
                  aria-label="Add new announcement"
                  onClick={() => setShowAnnouncementForm(true)}
                >
                  <i className="fas fa-plus" /> Add
                </Button>
                <NewAnnouncementForm
                  show={showAnnoucementForm}
                  setShow={setShowAnnouncementForm}
                  setAnnouncements={setAnnouncements}
                />
              </>
            )}
          </div>
          <hr />
          {announceLoaded ? (
            <>
              {/* Announcements */}
              {announcements.results.length === 0 && (
                <Alert variant="dark">
                  There are no Pokébox announcements.
                </Alert>
              )}
              {announcements.results.map((item) => (
                <Announcement
                  key={item.id}
                  {...item}
                  is_staff={is_staff}
                  setAnnouncements={setAnnouncements}
                />
              ))}
            </>
          ) : (
            <LoadingText />
          )}
        </Col>
        <Col xs={12} lg={8}>
          <div className="d-flex align-items-center justify-content-between">
            <h1>News</h1>
            {is_staff && (
              <>
                {/* Add news item button */}
                <Button
                  variant="dark"
                  aria-label="Add new news item"
                  onClick={() => navigate("/newnews")}
                >
                  <i className="fas fa-plus" /> Add
                </Button>
              </>
            )}
          </div>
          <hr />
          {id && (
            <>
              {/* Button to all news items */}
              <Button variant="dark" className="mb-3" onClick={handleViewAll}>
                Read all news
              </Button>
            </>
          )}
          {id && newsLoaded && news.results.length === 0 && (
            <>
              {/* Alert if invalid news ID parameter */}
              <Alert variant="dark">Invalid news item ID.</Alert>
            </>
          )}
          {!id && (
            <Form>
              <Row>
                <Col lg={6} xs={12}>
                  {/* News search field */}
                  <Form.Group>
                    <Form.Control
                      name="search"
                      placeholder="Search"
                      value={query}
                      onChange={handleChange}
                      onKeyDown={preventSubmit}
                      aria-label="Search"
                    />
                  </Form.Group>
                </Col>
                <Col lg={6} xs={12}>
                  {/* News category dropdown */}
                  <Form.Group>
                    <Form.Control
                      as="select"
                      name="category"
                      id="category"
                      value={category}
                      onChange={handleCategoryChange}
                      aria-label="Category selection"
                    >
                      <option value="">All</option>
                      <option value="Anime">Anime</option>
                      <option value="Games">Games</option>
                      <option value="TCG">TCG</option>
                      <option value="Other">Other</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          )}
          {newsLoaded ? (
            <>
              {/* News items */}
              <InfiniteScroll
                dataLength={news.results.length}
                loader={<LoadingText />}
                hasMore={!!news.next}
                next={() => fetchMoreData(news, setNews)}
              >
                {news.results.map((item) => (
                  <NewsItem
                    key={item.id}
                    {...item}
                    is_staff={is_staff}
                    setNewsLoaded={setNewsLoaded}
                  />
                ))}
              </InfiniteScroll>
              {!news.results.length && !id && (
                <Alert variant="dark">There is nothing to read!</Alert>
              )}
            </>
          ) : (
            <LoadingText />
          )}
        </Col>
      </Row>
    </>
  );
};

export default News;
