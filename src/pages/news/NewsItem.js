import React from "react";
import { useNavigate } from "react-router-dom";
// CSS
import styles from "../../styles/NewsItem.module.css";
// Bootstrap
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Badge from "react-bootstrap/Badge";

const NewsItem = (props) => {
  const { title, body, created, image, is_staff, category, id, setNewsLoaded } =
    props;
  const navigate = useNavigate();

  // Badge variant variable assignment
  let variant = "";
  switch (category) {
    case "Games":
      variant = "info";
      break;
    case "Anime":
      variant = "success";
      break;
    case "TCG":
      variant = "danger";
      break;
    default:
      variant = "primary";
  }

  const handleNavigate = () => {
    setNewsLoaded(false);
    navigate(`/news/${id}`);
  };

  return (
    <div className={styles.NewsItem}>
      <div className={styles.Header}>
        {/* Title and category */}
        <h2 onClick={handleNavigate} className={styles.Title}>
          {title}
        </h2>
        <Badge variant={variant}>{category}</Badge>
      </div>
      <hr />
      {/* Body and image */}
      <p className={styles.Body}>{body}</p>
      {image && (
        <img src={image} alt="news item" className={styles.NewsImage} />
      )}
      <div className={styles.NewsFooter}>
        {/* Date */}
        <span className={styles.Created}>{created}</span>
        {is_staff && (
          <OverlayTrigger overlay={<Tooltip>Edit news item</Tooltip>}>
            {/* Edit news item button */}
            <i
              className={`fas fa-pen-to-square ${styles.EditLink}`}
              onClick={() => navigate(`/editnews/${id}`)}
              aria-label="edit news item"
            ></i>
          </OverlayTrigger>
        )}
      </div>
    </div>
  );
};

export default NewsItem;
