import React from "react";
import PropTypes from "prop-types";
import { Container, ListGroup } from "react-bootstrap";

const Overview = ({ project }) => {
  const headers = [
    { prop: "title", text: "Title" },
    { prop: "shortDescription", text: "Project description" },
    { prop: "author", text: "Project supervisor" },
    { prop: "categories", text: "Categories" },
  ];
  return (
    <Container>
      <ListGroup>
        {headers.map((header) => (
          <ListGroup.Item>
            <p className="fw-bold me-2">{header.text}</p>
            <p className="text-muted">{project[header.prop]}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

Overview.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
  }).isRequired,
};

export default Overview;
