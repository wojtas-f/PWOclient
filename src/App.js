import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import List from "./Pages/List";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/list" element={<List />} exact />
          <Route path="/login" element={<Login />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
