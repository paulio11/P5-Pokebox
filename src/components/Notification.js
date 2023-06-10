import React, { useEffect, useState } from "react";
import styles from "../styles/Notification.module.css";
import { Toast } from "react-bootstrap";
import {
  useCurrentNotification,
  useSetCurrentNotification,
} from "../contexts/NotificationContext";

const Notification = () => {
  const currentNotification = useCurrentNotification();
  const setCurrentNotification = useSetCurrentNotification();
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer;
    if (currentNotification) {
      setShow(true);
      timer = setTimeout(() => {
        setShow(false);
        setCurrentNotification(null);
      }, 6000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [currentNotification, setCurrentNotification]);

  if (currentNotification) {
    return (
      <Toast show={show} className={styles.Notification}>
        <Toast.Body className={styles.Message}>
          {currentNotification}
        </Toast.Body>
      </Toast>
    );
  }
};

export default Notification;
