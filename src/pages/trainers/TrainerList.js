import React, { useEffect, useState } from "react";
// Components
import LoadingText from "../../components/LoadingText";
import Trainer from "./Trainer";
import InfiniteScroll from "react-infinite-scroll-component";
// API
import { axiosReq } from "../../api/AxiosDefaults";
// CSS
import styles from "../../styles/TrainerList.module.css";
// Bootstrap
import Form from "react-bootstrap/Form";
// Utils
import { fetchMoreData } from "../../utils/Utils";
// Hooks
import useTitle from "../../hooks/useTitle";
// Contexts
import { useSetCurrentNotification } from "../../contexts/NotificationContext";

const TrainerList = () => {
  // State variables.
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("col_size");
  const [sortOrder, setSortOrder] = useState("-");

  const setCurrentNotification = useSetCurrentNotification();

  useTitle("Trainers");

  // Gets list of trainers from API, filtered or sorted depending on form values.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosReq.get(
          `profiles/?ordering=${sortOrder}${sortBy}&search=${query}`
        );
        setData(data);
        setLoaded(true);
      } catch (error) {
        setCurrentNotification(
          "An error occurred while attempting to load trainer data. Please try again."
        );
      }
    };

    setData({});
    setLoaded(false);

    const queryTimer = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => {
      clearTimeout(queryTimer);
    };
  }, [query, sortBy, sortOrder, setCurrentNotification]);

  // Handles search form change, converts query to lower case.
  const handleChange = (event) => {
    setQuery(event.target.value.toLowerCase());
    setLoaded(false);
  };

  // Handles sorting form changes
  const handleSortChange = (event) => {
    const { name, value } = event.target;
    if (name === "sort_by") {
      setSortBy(value);
    } else if (name === "sort_order") {
      setSortOrder(value);
    }
  };

  // Prevents refresh of page when enter is pressed in search field.
  const preventSubmit = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  return (
    <>
      <h1>Trainers</h1>
      <hr />
      <Form className={styles.SortForm}>
        {/* Search field */}
        <Form.Group>
          <Form.Label htmlFor="search" hidden>
            Search
          </Form.Label>
          <Form.Control
            name="search"
            id="search"
            value={query}
            placeholder="Search"
            onChange={handleChange}
            onKeyDown={preventSubmit}
          />
        </Form.Group>
        {/* Sort by dropdown */}
        <Form.Group>
          <Form.Label htmlFor="sort_by">Sort By</Form.Label>
          <Form.Control
            as="select"
            name="sort_by"
            id="sort_by"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="owner__username">Username</option>
            <option value="col_size">Pokémon collection</option>
            <option value="created">Join date</option>
          </Form.Control>
        </Form.Group>
        {/* Sort order dropdown */}
        <Form.Group>
          <Form.Label htmlFor="sort_order">Sort Order</Form.Label>
          <Form.Control
            name="sort_order"
            id="sort_order"
            as="select"
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
          {data.results.length ? (
            <InfiniteScroll
              className={styles.ResultsContainer}
              dataLength={data.count}
              loader={<LoadingText />}
              hasMore={!!data.next}
              next={() => fetchMoreData(data, setData)}
            >
              {data.results.map((trainer) => (
                <Trainer key={trainer.id} {...trainer} />
              ))}
            </InfiniteScroll>
          ) : (
            <div className="d-flex flex-column align-items-center">
              {/* 404 no trainer found! */}
              <span className={styles.SearchError}>
                No trainer named <strong>{query}</strong> found!
              </span>
            </div>
          )}
        </>
      ) : (
        <LoadingText />
      )}
    </>
  );
};

export default TrainerList;
