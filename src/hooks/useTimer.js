import { useEffect, useState, useCallback } from "react";

export const useTimer = (initial = 0, onTimeUp = () => {}) => {
  const [timeLeft, setTimeLeft] = useState(initial);
  const [active, setActive] = useState(false);

  useEffect(() => setTimeLeft(initial), [initial]);

  useEffect(() => {
    if (!active) return;
    if (timeLeft <= 0) {
      setActive(false);
      onTimeUp();
      return;
    }
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [active, timeLeft, onTimeUp]);

  const start = useCallback(() => setActive(true), []);
  const pause = useCallback(() => setActive(false), []);
  const reset = useCallback(
    (v = initial) => {
      setTimeLeft(v);
      setActive(false);
    },
    [initial]
  );

  return { timeLeft, active, start, pause, reset, setTimeLeft };
};
