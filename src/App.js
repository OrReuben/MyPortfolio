import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectInfo from "./pages/ProjectInfo";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project-info" element={<ProjectInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
