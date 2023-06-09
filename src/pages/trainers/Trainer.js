import React from "react";
import { Link } from "react-router-dom";
// CSS
import styles from "../../styles/Trainer.module.css";
// Bootstrap
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Components
import Ball from "../../components/Ball";

const Trainer = (props) => {
  const { id, owner, avatar, pokemon, about, created } = props;

  return (
    <>
      <div className={styles.TrainerCard}>
        <Link className={styles.TrainerLink} to={`/trainer/${id}`}>
          <Row>
            {/* ID and join date */}
            <Col className={styles.Header}>
              <span>ID: #{id}</span>
              <span>{created}</span>
            </Col>
          </Row>
          <Row>
            {/* Avatar */}
            <Col xs={3}>
              <img
                src={avatar}
                alt={`${owner}'s avatar`}
                className={styles.Avatar}
              />
            </Col>
            {/* Username and about text */}
            <Col>
              <div className={styles.TrainerName}>{owner}</div>
              <div>{about}</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <hr />
              {/* Collection progress */}
              <div className={styles.Footer}>
                <Ball size={pokemon.length} />
                <ProgressBar
                  now={pokemon.length}
                  max={1010}
                  variant="danger"
                  className={styles.CollectionBar}
                  aria-hidden
                />
                <div className={styles.CollectionPercent}>
                  <span hidden>Collection Percent Complete:</span>
                  {((pokemon.length / 1010) * 100).toFixed(2)}%
                </div>
              </div>
            </Col>
          </Row>
        </Link>
      </div>
    </>
  );
};

export default Trainer;
