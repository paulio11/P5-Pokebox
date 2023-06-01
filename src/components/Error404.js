import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const Error404 = (props) => {
  const { pokemon, trainer, post, page, query } = props;
  const navigate = useNavigate();

  useTitle("Error 404");

  return (
    <>
      <h1>Error 404</h1>
      <hr />
      <p>
        The {pokemon && "Pokémon"}
        {trainer && "trainer with ID:"}
        {post && "diary entry with ID:"}
        {page && "page you were looking for"} <strong>{query && query} </strong>
        could not be found.
      </p>
      <Button variant="danger" onClick={() => navigate(-1)}>
        <i className="fas fa-arrow-left" /> Go back
      </Button>
    </>
  );
};

export default Error404;
