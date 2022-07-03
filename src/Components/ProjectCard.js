import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Col } from "react-bootstrap";

const ProjectCard = ({ project }) => {
  return (
    <Col sm={3}>
      <Card className="h-100" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {project.categories.map((category) => (
              <span class="badge bg-info me-1 mt-1">{category}</span>
            ))}
          </Card.Subtitle>
          <Card.Text>{project.shortDescription}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <span className="text-muted">{project.author}</span>
          <Button variant="primary">Read more</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
  }).isRequired,
};

export default ProjectCard;
