import React from "react";
import styles from "../styles/LoadingText.module.css";
import Spinner from "react-bootstrap/Spinner";

const LoadingText = (query) => {
  return (
    <div className="d-flex flex-column align-items-center mb-5">
      <span className={styles.LoadingText}>Loading...</span>
      <Spinner animation="border" variant="danger" />
    </div>
  );
};

export default LoadingText;
