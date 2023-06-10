import React from "react";
import styles from "../../styles/Trainer.module.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Ball from "../../components/Ball";

const Trainer = (props) => {
  const { id, owner, avatar, pokemon, about, created } = props;

  return (
    <>
      <div className={styles.TrainerCard}>
        <Link className={styles.TrainerLink} to={`/trainer/${id}`}>
          <Row>
            <Col className={styles.Header}>
              <span>ID: #{id}</span>
              <span>{created}</span>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <img
                src={avatar}
                alt={`${owner}'s avatar`}
                className={styles.Avatar}
              />
            </Col>
            <Col>
              <div className={styles.TrainerName}>{owner}</div>
              <div>{about}</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <hr />
              <div className={styles.Footer}>
                <Ball size={pokemon.length} />
                <ProgressBar
                  now={pokemon.length}
                  max={1010}
                  variant="danger"
                  className={styles.CollectionBar}
                />
                <div className={styles.CollectionPercent}>
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
