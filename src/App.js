import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Login from "./Pages/Login";
import List from "./Pages/List";
import Home from "./Pages/Home";

function App() {
  return (
    <Container className="h-100 m-0 p-0">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/list" element={<List />} exact />
        <Route path="/login" element={<Login />} exact />
      </Routes>
    </Container>
  );
}

export default App;
