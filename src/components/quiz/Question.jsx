import React from "react";

const Question = ({ question, questionIndex, selectedAnswer, onSelect }) => {
  return (
    <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-3">{question.text}</h3>
      <div className="space-y-3">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onSelect(questionIndex, i)}
            className={`w-full text-left p-3 rounded-lg border-2 transition ${
              selectedAnswer === i
                ? "border-blue-500 bg-blue-50 text-blue-900"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <span className="font-medium mr-3">
              {String.fromCharCode(65 + i)}.
            </span>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
