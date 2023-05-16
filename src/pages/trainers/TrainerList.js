import React, { useEffect, useState } from "react";
import LoadingText from "../../components/LoadingText";
import { axiosReq } from "../../api/AxiosDefaults";

const TrainerList = () => {
  const [loaded, setLoaded] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosReq("profiles");
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
          {list.map((trainer) => (
            <div key={trainer.id}>{trainer.owner}</div>
          ))}
        </>
      ) : (
        <LoadingText />
      )}
    </>
  );
};

export default TrainerList;
