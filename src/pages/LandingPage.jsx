import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  // Auto-redirect after 5s
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 15000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="max-w-2xl bg-white shadow-lg rounded-2xl p-10 relative z-10">
        {/* Decorative floating papers */}
        <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-100 rounded-lg shadow-md animate-float-slow"></div>
        <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-pink-100 rounded-lg shadow-md animate-float-fast"></div>
        <div className="absolute top-10 -right-10 w-14 h-14 bg-green-100 rounded-lg shadow-md animate-tilt"></div>

        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          Welcome to QuizMaster
        </h1>
        <p className="text-gray-600 mb-6">
          Test your knowledge across multiple subjects. Sharpen your skills,
          challenge yourself, and see how high you can score!
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
