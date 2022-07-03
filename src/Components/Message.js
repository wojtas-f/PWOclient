import React from "react";
import PropTypes from "prop-types";
import { Toast } from "react-bootstrap";

const author = "Adam";

const Message = ({ message }) => {
  const classes =
    author === message.author
      ? "bg-secondary  text-white mt-1 mb-1"
      : "bg-info align-self-end mt-1 mb-1 text-end";
  return (
    <Toast className={classes} style={{ width: "60%" }}>
      <Toast.Header closeButton={false}>
        <strong className="me-auto">{message.author}</strong>
        <small>{message.date}</small>
      </Toast.Header>
      <Toast.Body>{message.content}</Toast.Body>
    </Toast>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Message;
