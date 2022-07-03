import React from "react";
import {
  Form,
  OverlayTrigger,
  Tooltip,
  Button,
  Container,
} from "react-bootstrap";

const Login = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center bg-primary bg-gradient"
      style={{
        width: "100vw",
        height: "100vh",
        maxWidth: "100vw",
        maxHeight: "100vh",
      }}
    >
      <Form
        className="shadow-lg p-3 mb-5 bg-white rounded"
        style={{ width: "30%" }}
      >
        <h1 className="fs-1 w-100 text-center p-4">Sign in</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <div className="d-flex flex-row justify-content-between">
          <OverlayTrigger
            key="bottom"
            placement="bottom"
            overlay={
              <Tooltip id={`tooltip-bottom`}>
                Contact site administrator
              </Tooltip>
            }
          >
            <span className="text-muted">Forgot password?</span>
          </OverlayTrigger>
          <Button variant="success">Log In</Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
