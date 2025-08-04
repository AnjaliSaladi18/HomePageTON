// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Welcome from "./Pages/Welcome";


function App() {
  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Welcome" element={<Welcome />} />
        
      </Routes>
    </Router>
  );
}

export default App;
