// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Welcome from "./Pages/Welcome";
import About from "./Pages/About";
import Disclaimer from "./Pages/Disclaimer";
import Accessibility from "./Pages/Accessibility";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsofUse from "./Pages/TermsofUse";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Disclaimer" element={<Disclaimer></Disclaimer>}></Route>
        <Route path="/Accessibility" element={<Accessibility></Accessibility>}></Route>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy></PrivacyPolicy>}></Route>
        <Route path="/TermsofUse" element={<TermsofUse></TermsofUse>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
