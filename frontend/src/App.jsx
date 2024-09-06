/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CoursesPage from "./components/CoursesPage";
import ApprenticeshipPage from "./components/ApprenticeshipPage";
import LoginSignupPage from "./components/LoginSignupPage";
import LeetCodeUI from "./components/LeetCodeUI";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/apprenticeship" element={<ApprenticeshipPage />} />
        <Route path="/practice" element={<LeetCodeUI />} />
        <Route path="/login" element={<LoginSignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
