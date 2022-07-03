import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

import Message from "./Message";

const messages = [
  {
    date: Date.now(),
    author: "John",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum porta nibh, quis egestas libero.",
  },
  {
    date: Date.now(),
    author: "John",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum porta nibh, quis egestas libero.",
  },
  {
    date: Date.now(),
    author: "Adam",
    content:
      "Aenean posuere sapien tortor. Aliquam convallis, orci in fermentum iaculis,",
  },
  {
    date: Date.now(),
    author: "John",
    content: "Ut consequat est id libero commodo tristique. Morbi ultricies",
  },
  {
    date: Date.now(),
    author: "Adam",
    content:
      "tellus eleifend venenatis mollis, metus mi consequat purus, et varius mauris odio vel diam",
  },
  {
    date: Date.now(),
    author: "Adam",
    content:
      "tellus eleifend venenatis mollis, metus mi consequat purus, et varius mauris odio vel diam",
  },
];

const ContactTab = () => {
  return (
    <Container>
      <div className="d-flex flex-column">
        {messages.map((message) => (
          <Message message={message} />
        ))}
      </div>

      <Form>
        <Row>
          <Col sm={11}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Col>
          <Col sm={1}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ContactTab;
