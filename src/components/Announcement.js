import React, { useEffect, useState } from "react";
// API
import { axiosReq } from "../api/AxiosDefaults";
// Contexts
import { useSetCurrentNotification } from "../contexts/NotificationContext";
// Bootstrap
import Alert from "react-bootstrap/Alert";
// CSS
import styles from "../styles/Announcement.module.css";

const Announcement = () => {
  // State variables
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const setCurrentNotification = useSetCurrentNotification();
  const { id, body, created } = data;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosReq.get("announcements/");
        // Set data as the latest announcement.
        if (data.results.length) {
          setData(data.results[0]);
          setLoaded(true);
        }
      } catch (error) {
        setCurrentNotification(
          "An error occurred while attempted to load announcements. Please try again."
        );
      }
    };

    setLoaded(false);
    fetchData();

    // Check local storage to see if user has dismissed latest announcement.
    const dismissedState = localStorage.getItem(`PBAnnounce-${id}`);
    if (dismissedState === "true") {
      setDismissed(true);
    }
  }, [setCurrentNotification, id]);

  const dismissAlert = () => {
    // Hide announcement.
    setDismissed(true);

    // Get all local storage keys.
    const keys = Object.keys(localStorage);
    keys.map((key) => {
      // Check if key matches.
      if (key.startsWith("PBAnnounce-")) {
        // Get number.
        const number = key.substring(11);
        // If number is different from the new announcement.
        if (number !== id) {
          // Remove item (to keep local storage tidy).
          localStorage.removeItem(key);
        }
      }
      return key;
    });

    // Set latest announcement to dismissed in local storage.
    localStorage.setItem(`PBAnnounce-${id}`, "true");
  };

  if (dismissed) {
    return null;
  }

  if (loaded && !dismissed) {
    return (
      <Alert
        variant="danger"
        dismissible
        onClose={dismissAlert}
        show={!dismissed}
        className={styles.Announcement}
      >
        <span className={styles.Created}>{created}</span>
        <br />
        <strong>{body}</strong>
      </Alert>
    );
  }
};

export default Announcement;
