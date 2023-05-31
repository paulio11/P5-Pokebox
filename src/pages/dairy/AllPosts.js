import React, { useEffect, useState } from "react";
import LoadingText from "../../components/LoadingText";
import { axiosReq } from "../../api/AxiosDefaults";
import { Alert, Form } from "react-bootstrap";
import Post from "./Post";
import styles from "../../styles/AllPosts.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const AllPosts = () => {
  const [loaded, setLoaded] = useState(false);
  const [posts, setPosts] = useState({});
  const [sortBy, setSortBy] = useState("created");
  const [sortOrder, setSortOrder] = useState("-");
  const [likeCheck, setLikeCheck] = useState(false);
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(
          `posts/?ordering=${sortOrder}${sortBy}&likes__owner__profile=${
            likeCheck ? currentUser.profile_id : ""
          }`
        );
        setPosts(data);
        setLoaded(true);
      } catch (error) {}
    };

    setLoaded(false);
    fetchPosts();
  }, [sortBy, sortOrder, likeCheck, currentUser.profile_id]);

  const handleSortChange = (event) => {
    const { name, value } = event.target;
    if (name === "sort_by") {
      setSortBy(value);
    } else if (name === "sort_order") {
      setSortOrder(value);
    } else if (name === "like_check") {
      setLikeCheck(!likeCheck);
    }
  };

  return (
    <>
      <h1>All Dairy Entries</h1>
      <hr />
      <Form className={styles.SortForm}>
        {currentUser && (
          <Form.Check
            label="Show only entries I liked"
            name="like_check"
            onChange={handleSortChange}
          />
        )}
        <Form.Group>
          <Form.Label>Sort By</Form.Label>
          <Form.Control
            as="select"
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
          <Form.Label>Sort Order</Form.Label>
          <Form.Control
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
      {loaded ? (
        <>
          {posts.results.length ? (
            <>
              {posts.results.map((post, index) => (
                <Post key={index} {...post} setPosts={setPosts} />
              ))}
            </>
          ) : (
            <Alert variant="dark">There are no dairy entries yet!</Alert>
          )}
        </>
      ) : (
        <LoadingText />
      )}
    </>
  );
};

export default AllPosts;
