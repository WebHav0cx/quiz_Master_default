import React from "react";
import { Clock } from "lucide-react";

const Timer = ({ seconds }) => {
  const mins = Math.floor(seconds / 60);
  const secs = (seconds % 60).toString().padStart(2, "0");
  return (
    <div className="flex items-center text-sm text-gray-600">
      <Clock className="w-4 h-4 mr-1" />
      {mins}:{secs}
    </div>
  );
};

export default Timer;
