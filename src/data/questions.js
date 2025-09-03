import data from "../../public/questions.json";

export const subjects = data.subjects.map((s) => ({
  ...s,
  questionCount: s.questions.length,
  durationSeconds: (s.durationMinutes ?? 30) * 60,
}));

export default subjects;
