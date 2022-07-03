import React from "react";
import { Container, Row } from "react-bootstrap";

import ProjectCard from "../Components/ProjectCard";
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
              reserved: false,
            },
            {
              title: "Test 2",
              author: "Test Author",
              categories: ["web development", "wordpress", "e-commerce"],
              shortDescription: "lorem ipsum dolor sit amet, consectetur",
              reserved: false,
            },
            {
              title: "Test 3",
              author: "Test Author",
              categories: ["PC"],
              shortDescription: "lorem ipsum dolor sit amet, consectetur",
              reserved: false,
            },
            {
              title: "Test 3",
              author: "Test Author",
              categories: ["PC"],
              shortDescription: "lorem ipsum dolor sit amet, consectetur",
              reserved: false,
            },
            {
              title: "Test 3",
              author: "Test Author",
              categories: ["PC"],
              shortDescription: "lorem ipsum dolor sit amet, consectetur",
              reserved: false,
            },
          ].map((project, index) => (
            <ProjectCard key={`${index}_list_item`} project={project} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Projects;
