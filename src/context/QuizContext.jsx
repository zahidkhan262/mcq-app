import { createContext, useContext, useState, useEffect } from 'react';

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [subjects, setSubjects] = useState({});
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [questionCount, setQuestionCount] = useState(null);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { questionId: { selectedOptionId, isCorrect, attempts } }
  const [totalAttempts, setTotalAttempts] = useState(0);

  useEffect(() => {
    fetch('/data/mcq-data.json')
      .then((res) => res.json())
      .then((data) => setSubjects(data.subjects || {}))
      .catch(console.error);
  }, []);

  const selectSubject = (subjectId) => {
    setSelectedSubject(subjectId);
    setQuestionCount(null);
    setCurrentQuestions([]);
    setCurrentIndex(0);
    setAnswers({});
    setTotalAttempts(0);
  };

  const selectQuestionCount = (count) => {
    const subjectData = subjects[selectedSubject];
    if (!subjectData) return;

    const allQuestions = [...subjectData.questions];
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, count);

    setQuestionCount(count);
    setCurrentQuestions(selected);
    setCurrentIndex(0);
    setAnswers({});
    setTotalAttempts(0);
  };

  const recordAnswer = (questionId, optionId, isCorrect, attempts) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: { selectedOptionId: optionId, isCorrect, attempts },
    }));
    if (isCorrect) {
      setTotalAttempts((prev) => prev + attempts);
    }
  };

  const resetQuiz = () => {
    setSelectedSubject(null);
    setQuestionCount(null);
    setCurrentQuestions([]);
    setCurrentIndex(0);
    setAnswers({});
    setTotalAttempts(0);
  };

  const goBackToLengthSelection = () => {
    setQuestionCount(null);
    setCurrentQuestions([]);
    setCurrentIndex(0);
    setAnswers({});
    setTotalAttempts(0);
  };

  const getResults = () => {
    let correct = 0;
    let wrong = 0;
    let attempts = 0;

    Object.values(answers).forEach((a) => {
      if (a.isCorrect) {
        correct++;
        attempts += a.attempts;
      } else {
        wrong++;
      }
    });

    const answeredCount = correct + wrong;
    const total = currentQuestions.length;
    const isEarlySubmit = answeredCount < total;
    const scoreDenominator = isEarlySubmit ? answeredCount : total;

    return {
      total,
      correct,
      wrong,
      answeredCount,
      isEarlySubmit,
      totalAttempts: attempts,
      percentage: scoreDenominator > 0 ? Math.round((correct / scoreDenominator) * 100) : 0,
    };
  };

  const value = {
    subjects,
    selectedSubject,
    questionCount,
    currentQuestions,
    currentIndex,
    setCurrentIndex,
    answers,
    totalAttempts,
    selectSubject,
    selectQuestionCount,
    recordAnswer,
    resetQuiz,
    goBackToLengthSelection,
    getResults,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within QuizProvider');
  }
  return context;
}
