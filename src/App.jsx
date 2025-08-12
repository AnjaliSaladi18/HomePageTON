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
import ScrollToTop from "./components/TrainingCards/ScrollToTop";
import Chart from "./Pages/Chart";
import CookiesPopup from "./Pages/CookiesPopup";
import CookiesPolicy from "./Pages/CookiesPolicy";
import FIIandDII from "./Pages/FIIandDII";
function App() {
  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Disclaimer" element={<Disclaimer></Disclaimer>}></Route>
        <Route path="/Accessibility" element={<Accessibility></Accessibility>}></Route>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy></PrivacyPolicy>}></Route>
        <Route path="/TermsofUse" element={<TermsofUse></TermsofUse>}></Route>
        <Route path="/Chart" element={<Chart></Chart>}></Route>
        <Route path="/CookiesPopup" element={<CookiesPopup></CookiesPopup>}></Route>
        <Route path="/CookiesPolicy" element={<CookiesPolicy></CookiesPolicy>}></Route>
        <Route path="/FIIandDII" element={<FIIandDII></FIIandDII>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
