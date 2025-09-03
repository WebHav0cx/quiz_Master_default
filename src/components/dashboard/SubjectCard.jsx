import React from "react";
import { BookOpen, Clock, Play } from "lucide-react";

const SubjectCard = ({ subject, onStart }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
      <div className="p-6">
        <div className="text-4xl mb-4 text-center">{subject.emoji}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {subject.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {subject.description || "Test your knowledge"}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span className="flex items-center">
            <BookOpen className="w-4 h-4 mr-1" />
            {subject.questionCount} questions
          </span>
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {subject.durationMinutes ??
              Math.round(subject.durationSeconds / 60)}{" "}
            min
          </span>
        </div>
        <button
          onClick={onStart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium flex items-center justify-center space-x-2"
        >
          <Play className="w-4 h-4" />
          <span>Start Quiz</span>
        </button>
      </div>
    </div>
  );
};

export default SubjectCard;
