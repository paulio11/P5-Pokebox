import React, { useState, useEffect } from "react";
import styles from "../styles/ToTopButton.module.css";
import Button from "react-bootstrap/Button";

const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Button
      aria-label="Scroll to top"
      variant="danger"
      className={`${styles.TopButton} ${isVisible && `${styles.Visible}`}`}
      onClick={handleClick}
    >
      <i className="fas fa-arrow-up"></i>
    </Button>
  );
};

export default ToTopButton;
