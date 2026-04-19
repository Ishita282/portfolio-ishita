import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Workspace from "./Components/Workspace";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Workspace />} />
      </Routes>
    </Router>
  );
}

export default App;
