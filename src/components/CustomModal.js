import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const CustomModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { buttonText, heading, children } = props;

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        {buttonText}
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default CustomModal;
