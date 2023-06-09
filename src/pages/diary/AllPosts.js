import React, { useEffect, useState } from "react";
// API
import { axiosReq } from "../../api/AxiosDefaults";
// Components
import LoadingText from "../../components/LoadingText";
import InfiniteScroll from "react-infinite-scroll-component";
// Bootstrap
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Post from "./Post";
// CSS
import styles from "../../styles/AllPosts.module.css";
// Contexts
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useSetCurrentNotification } from "../../contexts/NotificationContext";
// Utils
import { fetchMoreData } from "../../utils/Utils";
// Hooks
import useTitle from "../../hooks/useTitle";

const AllPosts = () => {
  // State variables.
  const [loaded, setLoaded] = useState(false);
  const [posts, setPosts] = useState({});
  const [sortBy, setSortBy] = useState("created");
  const [sortOrder, setSortOrder] = useState("-");
  const [likeCheck, setLikeCheck] = useState(false);
  const [imageCheck, setImageCheck] = useState(false);
  const [query, setQuery] = useState("");

  const currentUser = useCurrentUser();
  const setCurrentNotification = useSetCurrentNotification();

  useTitle("Diary Entries");

  // Fetch post data
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(
          `posts/?ordering=${sortOrder}${sortBy}&likes__owner__profile=${
            likeCheck ? currentUser?.profile_id : ""
          }&has_image=${imageCheck && "True"}&search=${query}`
        );
        setPosts(data);
        setLoaded(true);
      } catch (error) {
        setCurrentNotification(
          "An error occurred while attempting to load diary entries. Please try again."
        );
      }
    };

    setLoaded(false);

    const queryTimer = setTimeout(() => {
      fetchPosts();
    }, 1000);

    return () => {
      clearTimeout(queryTimer);
    };
  }, [
    sortBy,
    sortOrder,
    likeCheck,
    imageCheck,
    currentUser?.profile_id,
    setCurrentNotification,
    query,
  ]);

  // Handles sorting form changes
  const handleSortChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "sort_by":
        setSortBy(value);
        break;
      case "sort_order":
        setSortOrder(value);
        break;
      case "like_check":
        setLikeCheck(!likeCheck);
        break;
      case "image_check":
        setImageCheck(!imageCheck);
        break;
      default:
        break;
    }
  };

  // Handles search form change.
  const handleChange = (event) => {
    setQuery(event.target.value);
    setLoaded(false);
  };

  // Prevents refresh of page when enter is pressed in search field.
  const preventSubmit = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  return (
    <>
      <h1>Diary Entries</h1>
      <hr />
      <Form className={styles.SortForm}>
        {/* Search field */}
        <Form.Group>
          <Form.Label htmlFor="search">Search For</Form.Label>
          <Form.Control
            name="search"
            id="search"
            value={query}
            placeholder="Entry text or owner"
            onChange={handleChange}
            onKeyDown={preventSubmit}
          />
        </Form.Group>
        {/* Sort by dropdown */}
        <Form.Group>
          <Form.Label htmlFor="sort_by">Sort By</Form.Label>
          <Form.Control
            as="select"
            id="sort_by"
            name="sort_by"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="created">Date</option>
            <option value="like_count">Like Count</option>
            <option value="comment_count">Comment Count</option>
          </Form.Control>
        </Form.Group>
        {/* Sort order dropdown */}
        <Form.Group>
          <Form.Label htmlFor="sort_order">Sort Order</Form.Label>
          <Form.Control
            id="sort_order"
            as="select"
            name="sort_order"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="">Ascending</option>
            <option value="-">Descending</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form className={styles.SortForm}>
        <strong>Diary Entry Filters:</strong>
        {currentUser && (
          <Form.Group className={styles.FilterGroup}>
            {/* Liked post filter */}
            <Form.Label hidden htmlFor="like_check">
              Show only entries I liked
            </Form.Label>
            <Form.Check
              id="like_check"
              name="like_check"
              onChange={handleSortChange}
              label="Show only entries I liked"
              aria-label="Show only entries I liked"
            />
          </Form.Group>
        )}
        <Form.Group className={styles.FilterGroup}>
          {/* Image filter */}
          <Form.Label hidden htmlFor="image_check">
            Show only entries with an image
          </Form.Label>
          <Form.Check
            id="image_check"
            name="image_check"
            onChange={handleSortChange}
            label="Show only entries with an image"
            aria-label="Show only entries with an image"
          />
        </Form.Group>
      </Form>
      {loaded ? (
        <>
          {posts.results.length ? (
            <InfiniteScroll
              dataLength={posts.results.length}
              loader={<LoadingText />}
              hasMore={!!posts.next}
              next={() => fetchMoreData(posts, setPosts)}
            >
              {posts.results.map((post, index) => (
                <Post key={index} {...post} setPosts={setPosts} />
              ))}
            </InfiniteScroll>
          ) : (
            <Alert variant="dark">There are no diary entries yet!</Alert>
          )}
        </>
      ) : (
        <LoadingText />
      )}
    </>
  );
};

export default AllPosts;
