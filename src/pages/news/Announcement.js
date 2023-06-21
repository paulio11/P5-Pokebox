import React, { useState } from "react";
// CSS
import styles from "../../styles/NewsItem.module.css";
// Bootstrap
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
// Components
import EditAnnouncementForm from "./EditAnnouncementForm";

const Announcement = (props) => {
  const { id, body, created, is_staff, setAnnouncements } = props;
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <div className={styles.Announcement}>
      <div className={styles.AnnouncementHeader}>
        {/* Date / Time */}
        <p className={styles.Created}>{created}</p>
        {is_staff && (
          <OverlayTrigger overlay={<Tooltip>Edit announcement</Tooltip>}>
            {/* Edit announcement button */}
            <i
              className={`fas fa-pen-to-square ${styles.EditLink}`}
              onClick={() => setShowEditForm(!showEditForm)}
            ></i>
          </OverlayTrigger>
        )}
      </div>
      {showEditForm ? (
        <EditAnnouncementForm
          id={id}
          body={body}
          setShowEditForm={setShowEditForm}
          setAnnouncements={setAnnouncements}
        />
      ) : (
        <>
          {/* Announcement body text */}
          <strong>{body}</strong>
        </>
      )}
    </div>
  );
};

export default Announcement;
