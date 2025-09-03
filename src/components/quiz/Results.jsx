import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Results = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const subject = state?.subject;
  const score = state?.score ?? 0;

  if (!subject)
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white p-8 rounded-xl shadow">
          No results to show.
        </div>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white p-8 rounded-xl shadow text-center">
        <div className="text-6xl mb-4">
          {score >= 80 ? "🎉" : score >= 60 ? "👍" : "🙂"}
        </div>
        <h2 className="text-3xl font-bold mb-2">Quiz Complete</h2>
        <p className="text-gray-600 mb-4">
          Subject: <strong>{subject.title}</strong>
        </p>
        <div
          className={`text-5xl font-bold mb-4 ${
            score >= 80
              ? "text-green-600"
              : score >= 60
              ? "text-yellow-600"
              : "text-red-600"
          }`}
        >
          {score}%
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-6 py-2 rounded-lg bg-gray-700 text-white"
          >
            Back to Dashboard
          </button>
          <button
            onClick={() => navigate(`/quiz/${subject.id}`)}
            className="px-6 py-2 rounded-lg bg-blue-600 text-white"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
