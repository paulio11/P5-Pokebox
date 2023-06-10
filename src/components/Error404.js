import React from "react";
import { useNavigate } from "react-router-dom";
// Bootstrap
import Button from "react-bootstrap/Button";
// Hooks
import useTitle from "../hooks/useTitle";

const Error404 = (props) => {
  const { pokemon, trainer, post, page, query } = props;
  const navigate = useNavigate();

  useTitle("Error 404");

  // Return error page with text based on props.
  return (
    <>
      <h1>Error 404</h1>
      <hr />
      <p>
        The {pokemon && "Pokémon"}
        {trainer && "trainer with ID:"}
        {post && "diary entry with ID:"}
        {page && "page you were looking for"}{" "}
        <strong>{query && query} </strong>
        could not be found.
      </p>
      {/* Go back button */}
      <Button variant="danger" onClick={() => navigate(-1)}>
        <i className="fas fa-arrow-left" /> Go back
      </Button>
    </>
  );
};

export default Error404;
