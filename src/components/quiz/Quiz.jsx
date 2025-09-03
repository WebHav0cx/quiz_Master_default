import React, { useEffect, useMemo, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import subjects from "../../data/questions.js";
import Question from "./Question.jsx";
import ProgressBar from "./ProgressBar.jsx";
import Timer from "../common/Timer.jsx";
import { useTimer } from "../../hooks/useTimer.js";
import { AuthContext } from "../../context/AuthContext.jsx";

const Quiz = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // find subject from hardcoded data
  const subject = useMemo(
    () => subjects.find((s) => s.id === subjectId),
    [subjectId]
  );
  const total = subject?.questions?.length ?? 0;
  const duration = subject?.durationSeconds ?? 1800;

  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);

  // timer
  const { timeLeft, start } = useTimer(duration, () => handleSubmit());

  useEffect(() => {
    if (subject) start();
  }, [subject, start]);

  const onSelect = (qIndex, optionIndex) =>
    setAnswers((p) => ({ ...p, [qIndex]: optionIndex }));

  const calculateScore = () => {
    if (!subject) return 0;
    let correct = 0;
    subject.questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) correct++;
    });
    return Math.round((correct / subject.questions.length) * 100);
  };

  const handleSubmit = () => {
    const finalScore = calculateScore();
    // Save to localStorage per user
    try {
      const key = `scores_${user?.id ?? "guest"}`;
      const raw = localStorage.getItem(key);
      const arr = raw ? JSON.parse(raw) : [];
      arr.unshift({
        subject: subject.title,
        score: finalScore,
        date: new Date().toISOString(),
      });
      localStorage.setItem(key, JSON.stringify(arr.slice(0, 50)));
    } catch (e) {
      console.error("Failed to save score", e);
    }
    // navigate to results with score via state
    navigate("/results", { state: { subject, score: finalScore } });
  };

  if (!subject) return <div className="p-6">Subject not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{subject.title}</h2>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <Timer seconds={timeLeft} />
            <span>
              {Object.keys(answers).length} / {total}
            </span>
          </div>
        </div>

        <ProgressBar current={Object.keys(answers).length} total={total} />

        <div className="space-y-6">
          {subject.questions.map((q, idx) => (
            <Question
              key={q.id}
              question={q}
              questionIndex={idx}
              selectedAnswer={answers[idx]}
              onSelect={onSelect}
            />
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Try and attempt all quaestions before submitting.
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
            >
              Submit Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
