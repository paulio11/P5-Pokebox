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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosReq.get(
          query ? `profiles/?owner=${query}` : "profiles"
        );
        setResults(response.data.results);
        setLoaded(true);
      } catch (error) {}
    };

    setLoaded(false);

    const queryTimer = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => {
      clearTimeout(queryTimer);
    };
  }, [query]);

  const handleChange = (event) => {
    setQuery(event.target.value.toLowerCase());
    setLoaded(false);
  };

  return (
    <>
      <h1>Our Pokémon Trainers</h1>
      <hr />
      <Form className={styles.SearchForm}>
        <Form.Label hidden>Search for a Trainer</Form.Label>
        <Form.Control
          value={query}
          placeholder="Search"
          onChange={handleChange}
        />
      </Form>
      {loaded ? (
        <>
          <div className={styles.ResultsContainer}>
            {results.map((trainer) => (
              <Trainer key={trainer.id} {...trainer} />
            ))}
          </div>
        </>
      ) : (
        <LoadingText />
      )}
    </>
  );
};

export default TrainerList;
