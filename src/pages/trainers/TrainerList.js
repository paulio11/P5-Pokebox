import React, { useEffect, useState } from "react";
import LoadingText from "../../components/LoadingText";
import { axiosReq } from "../../api/AxiosDefaults";
import Trainer from "./Trainer";
import styles from "../../styles/TrainerList.module.css";

const TrainerList = () => {
  const [loaded, setLoaded] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosReq.get("profiles");
        setList(response.data.results);
        setLoaded(true);
      } catch (error) {}
    };

    setLoaded(false);
    fetchData();
  }, []);

  return (
    <>
      <h1>Our Pokémon Trainers</h1>
      <hr />
      {loaded ? (
        <>
          <div className={styles.ListContainer}>
            {list.map((trainer) => (
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
