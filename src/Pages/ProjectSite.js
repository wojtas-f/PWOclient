import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";

import Navbar from "../Components/Navbar";
import ContactTab from "../Components/ContactTab";
import Overview from "../Components/Overview";

const project = {
  title: "Test 2",
  author: "Test Author",
  categories: ["web development", "wordpress", "e-commerce"],
  shortDescription: "lorem ipsum dolor sit amet, consectetur",
  reserved: false,
};

const ProjectSite = () => {
  return (
    <>
      <Navbar />
      <Container>
        <span>Project</span>
        <Tabs
          defaultActiveKey="overview"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="overview" title="Overview">
            <Overview project={project} />
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <ContactTab />
          </Tab>
          <Tab eventKey="mark" title="Mark" disabled>
            <span>Mark</span>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default ProjectSite;
