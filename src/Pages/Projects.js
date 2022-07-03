import React from "react";
import { Container, Row } from "react-bootstrap";

import ListItem from "../Components/ListItem";
import Navbar from "../Components/Navbar";

const Projects = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h1>Available projects</h1>
        <Row>
          {[
            {
              title: "Test 1",
              author: "Test Author",
              categories: ["web development", "AI"],
              shortDescription: "lorem ipsum dolor sit amet, consectetur",
            },
            {
              title: "Test 2",
              author: "Test Author",
              categories: ["web development", "wordpress", "e-commerce"],
              shortDescription: "lorem ipsum dolor sit amet, consectetur",
            },
            {
              title: "Test 3",
              author: "Test Author",
              categories: ["PC"],
              shortDescription: "lorem ipsum dolor sit amet, consectetur",
            },
            {
              title: "Test 3",
              author: "Test Author",
              categories: ["PC"],
              shortDescription: "lorem ipsum dolor sit amet, consectetur",
            },
            {
              title: "Test 3",
              author: "Test Author",
              categories: ["PC"],
              shortDescription: "lorem ipsum dolor sit amet, consectetur",
            },
          ].map((project, index) => (
            <ListItem key={`${index}_list_item`} project={project} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Projects;
