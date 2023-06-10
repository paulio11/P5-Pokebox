import React, { useState, useEffect } from "react";
// CSS
import styles from "../styles/ToTopButton.module.css";
// Bootstrap
import Button from "react-bootstrap/Button";

const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState();

  // Smoothly scroll to top on click
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show/hide button based on scroll ammount
  const handleScroll = () => {
    if (window.scrollY > 100) {
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
