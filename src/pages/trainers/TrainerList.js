import React, { useEffect, useState } from "react";
import LoadingText from "../../components/LoadingText";
import { axiosReq } from "../../api/AxiosDefaults";
import Trainer from "./Trainer";
import styles from "../../styles/TrainerList.module.css";
import { Form } from "react-bootstrap";

const TrainerList = () => {
  const [loaded, setLoaded] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("pokemon");
  const [sortOrder, setSortOrder] = useState("desc");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosReq.get(
          query
            ? `profiles/?owner=${query}`
            : `profiles/?sort_by=${sortBy}&sort_order=${sortOrder}`
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

  const handleChange = (event) => {
    setQuery(event.target.value.toLowerCase());
    setLoaded(false);
  };

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
      <h1>Our Pokémon Trainers</h1>
      <hr />
      <Form className={styles.SortForm}>
        <Form.Group>
          <Form.Label hidden>Search</Form.Label>
          <Form.Control
            value={query}
            placeholder="Search"
            onChange={handleChange}
          />
        </Form.Group>
        {noResults && (
          <div className="d-flex flex-column align-items-center">
            <span className={styles.SearchError}>
              No trainer named <strong>{query}</strong> found!
            </span>
          </div>
        )}
        {!query && (
          <>
            <Form.Group>
              <Form.Label>Sort By</Form.Label>
              <Form.Control
                as="select"
                name="sort_by"
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value="owner">Username</option>
                <option value="pokemon">Pokémon collection</option>
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
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </Form.Control>
            </Form.Group>
          </>
        )}
      </Form>
      {loaded ? (
        <>
          {results.length && (
            <div className={styles.ResultsContainer}>
              {results.map((trainer) => (
                <Trainer key={trainer.id} {...trainer} />
              ))}
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
