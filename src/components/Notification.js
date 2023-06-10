import React, { useEffect } from "react";
import styles from "../styles/Notification.module.css";
import { Toast } from "react-bootstrap";
import {
  useCurrentNotification,
  useSetCurrentNotification,
} from "../contexts/NotificationContext";

const Notification = () => {
  const currentNotification = useCurrentNotification();
  const setCurrentNotification = useSetCurrentNotification();

  useEffect(() => {
    let timer;
    if (currentNotification) {
      timer = setTimeout(() => {
        setCurrentNotification(null);
      }, 6000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [currentNotification, setCurrentNotification]);

  if (currentNotification) {
    return (
      <Toast show={currentNotification} className={styles.Notification}>
        <Toast.Body className={styles.Message}>
          {currentNotification}
        </Toast.Body>
      </Toast>
    );
  }
};

export default Notification;
