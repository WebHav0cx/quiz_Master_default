import React, { useState } from "react";
import subjects from "../../data/questions.js";
import SubjectCard from "./SubjectCard.jsx";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";

const Dashboard = ({ onStartQuizFromApp }) => {
  const [list] = useState(subjects); // hardcoded data
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const start = (subject) => {
    // navigate to quiz route (App will handle selectedSubject via route param)
    navigate(`/quiz/${subject.id}`);
    if (onStartQuizFromApp) onStartQuizFromApp(subject);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome{user ? `, ${user.name}` : ""}!
        </h2>
        <p className="text-gray-600">Choose a subject to start your quiz</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {list.map((s) => (
          <SubjectCard key={s.id} subject={s} onStart={() => start(s)} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
