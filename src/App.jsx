// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Welcome from "./Pages/Welcome";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/About" element={<About/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
