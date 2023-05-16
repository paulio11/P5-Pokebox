import React from "react";
import styles from "../styles/LoadingText.module.css";

const LoadingText = (query) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <span className={styles.LoadingText}>Loading...</span>
    </div>
  );
};

export default LoadingText;
