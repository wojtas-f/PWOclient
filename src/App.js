import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Login from "./Pages/Login";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import MyProjects from "./Pages/MyProjects";
import ProjectSite from "./Pages/ProjectSite";

function App() {
  return (
    <Container fluid className="m-0 p-0">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/projects" element={<Projects />} exact />
        <Route path="/my-projects" element={<MyProjects />} exact />
        <Route path="/project/:id" element={<ProjectSite />} exact />
        <Route path="/login" element={<Login />} exact />
      </Routes>
    </Container>
  );
}

export default App;
