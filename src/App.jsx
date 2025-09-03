import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/common/NavBar.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Quiz from "./components/quiz/Quiz.jsx";
import Results from "./components/quiz/Results.jsx";
import "./App.css";
import LandingPage from "./pages/LandingPage.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/dashboard"
          element={
            <>
              <NavBar />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/quiz/:subjectId"
          element={
            <>
              <NavBar />
              <Quiz />
            </>
          }
        />
        <Route
          path="/results"
          element={
            <>
              {" "}
              <NavBar />
              <Results />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  );
};

export default App;
