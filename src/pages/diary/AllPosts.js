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

  const currentUser = useCurrentUser();

  useTitle("Diary Entries");

  // Fetches post data
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(
          `posts/?ordering=${sortOrder}${sortBy}&likes__owner__profile=${
            likeCheck ? currentUser?.profile_id : ""
          }&has_image=${imageCheck && "True"}`
        );
        setPosts(data);
        setLoaded(true);
      } catch (error) {}
    };

    setLoaded(false);
    fetchPosts();
  }, [sortBy, sortOrder, likeCheck, imageCheck, currentUser?.profile_id]);

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

  return (
    <>
      <h1>Diary Entries</h1>
      <hr />
      <Form className={styles.SortForm}>
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
        <div>
          {currentUser && (
            <Form.Group>
              <Form.Label htmlFor="like_check">
                Show only entries I liked
              </Form.Label>
              <Form.Check
                id="like_check"
                name="like_check"
                onChange={handleSortChange}
                aria-label="Show only entries I liked"
              />
            </Form.Group>
          )}
          <Form.Group>
            <Form.Label htmlFor="image_check">
              Show only entries with an image
            </Form.Label>
            <Form.Check
              id="image_check"
              name="image_check"
              onChange={handleSortChange}
              aria-label="Show only entries with an image"
            />
          </Form.Group>
        </div>
      </Form>
      {loaded ? (
        <>
          {posts.results.length ? (
            <InfiniteScroll
              children={posts.results.map((post, index) => (
                <Post key={index} {...post} setPosts={setPosts} />
              ))}
              dataLength={posts.results.length}
              loader={<LoadingText />}
              hasMore={!!posts.next}
              next={() => fetchMoreData(posts, setPosts)}
            />
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
