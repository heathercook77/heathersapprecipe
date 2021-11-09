import React from "react";

// Router
import { Routes, Route } from "react-router-dom";

import "./index.css";

// Components
import NavbarComp from "../NavbarComp/NavbarComp";
import Home from "../Home/Home";
import About from "../About/About";
import SurveyForm from "../SurveyForm/SurveyForm";

const NavRoutes = () => {
  return (
    <div className="app-container">
      <NavbarComp />
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="survey-form" element={<SurveyForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default NavRoutes;
