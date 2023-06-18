import React from "react";
// CSS
import styles from "../styles/LoadingText.module.css";
// Bootstrap
import Spinner from "react-bootstrap/Spinner";

const LoadingText = () => {
  return (
    <div className="d-flex flex-column align-items-center mb-5">
      {/* Loader */}
      <span className={styles.LoadingText}>Loading...</span>
      <Spinner animation="border" variant="danger" />
    </div>
  );
};

export default LoadingText;
