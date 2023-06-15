import React, { useState } from "react";
// Bootstrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CustomModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { buttonText, heading, children } = props;

  // Return a modal with fields for button text, heading, and method to
  // show/hide.
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
