import React from "react";
import { Container, Row } from "react-bootstrap";

import Navbar from "../Components/Navbar";
import ProjectCard from "../Components/ProjectCard";

const MyProjects = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h1>My projects</h1>
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
          ].map((project, index) => (
            <ProjectCard key={`${index}_list_item`} project={project} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MyProjects;
