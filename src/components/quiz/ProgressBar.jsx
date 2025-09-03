import React from "react";

const ProgressBar = ({ current, total }) => {
  const pct = total ? Math.round((current / total) * 100) : 0;
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
      <div
        className="bg-blue-600 h-2 rounded-full transition-all"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
};

export default ProgressBar;
