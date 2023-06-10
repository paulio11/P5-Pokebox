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

const TrainerList = () => {
  // State variables.
  const [loaded, setLoaded] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("col_size");
  const [sortOrder, setSortOrder] = useState("-");
  const [noResults, setNoResults] = useState(false);

  useTitle("Trainers");

  // Gets list of trainers from API, filtered or sorted depending on form values.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosReq.get(
          query
            ? `profiles/?owner__username=${query}`
            : `profiles/?ordering=${sortOrder}${sortBy}`
        );
        setResults(response.data.results);
        setLoaded(true);
      } catch (error) {
        if (error.response?.status === 404) {
          setLoaded(true);
          setNoResults(true);
        }
      }
    };

    setResults({});
    setNoResults(false);
    setLoaded(false);

    const queryTimer = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => {
      clearTimeout(queryTimer);
    };
  }, [query, sortBy, sortOrder]);

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

  return (
    <>
      <h1>Trainers</h1>
      <hr />
      <Form className={styles.SortForm}>
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
          />
        </Form.Group>
        {!query && (
          <>
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
          </>
        )}
      </Form>
      {noResults && (
        <div className="d-flex flex-column align-items-center">
          <span className={styles.SearchError}>
            No trainer named <strong>{query}</strong> found!
          </span>
        </div>
      )}
      {loaded ? (
        <>
          {results.length && (
            <InfiniteScroll
              className={styles.ResultsContainer}
              children={results.map((trainer) => (
                <Trainer key={trainer.id} {...trainer} />
              ))}
              dataLength={results.length}
              loader={<LoadingText />}
              hasMore={!!results.next}
              next={() => fetchMoreData(results, setResults)}
            />
          )}
        </>
      ) : (
        <LoadingText />
      )}
    </>
  );
};

export default TrainerList;
