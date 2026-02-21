import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import QuestionCard from '../components/QuestionCard';

export default function QuizPage() {
  const navigate = useNavigate();
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const {
    currentQuestions,
    currentIndex,
    setCurrentIndex,
    answers,
    recordAnswer,
    goBackToLengthSelection,
    questionCount,
  } = useQuiz();

  const attemptsRef = useRef({});

  const question = currentQuestions[currentIndex];
  const answer = question ? answers[question.id] : null;
  const hasSelected = answer !== undefined && answer !== null;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === currentQuestions.length - 1;

  const handleOptionSelect = (option) => {
    if (!question) return;

    const currentAttempts = (attemptsRef.current[question.id] || 0) + 1;
    attemptsRef.current[question.id] = currentAttempts;

    recordAnswer(question.id, option.id, option.isCorrect, currentAttempts);
  };

  const handleCancel = () => {
    goBackToLengthSelection();
    navigate('/choose-attempts');
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (isLast) {
      navigate('/result');
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const showEarlySubmitButton = questionCount > 10 && currentIndex >= 14;

  const handleEarlySubmit = () => {
    setShowSubmitConfirm(true);
  };

  const confirmEarlySubmit = () => {
    setShowSubmitConfirm(false);
    navigate('/result');
  };

  if (!question || currentQuestions.length === 0) {
    navigate('/choose-attempts');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col p-4 md:p-6">
      <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col">
        <div className="mb-6">
          <p className="text-slate-400 text-sm font-medium">
            Question {currentIndex + 1} / {questionCount}
          </p>
          <div className="h-1.5 mt-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questionCount) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex-1">
          <QuestionCard
            question={question}
            answer={answer}
            onOptionSelect={handleOptionSelect}
          />
        </div>

        {showEarlySubmitButton && (
          <button
            onClick={handleEarlySubmit}
            className="w-full mt-4 py-3 px-4 rounded-xl bg-amber-600/80 hover:bg-amber-500/80 
              border border-amber-500/50 text-white font-medium 
              transition-all duration-200"
          >
            Submit & See Results
          </button>
        )}

        {showSubmitConfirm && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
            onClick={() => setShowSubmitConfirm(false)}
          >
            <div
              className="bg-slate-800 rounded-2xl border border-slate-700 p-6 max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-white text-lg font-medium mb-6 text-center">
                Are you sure you want to submit and see results?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowSubmitConfirm(false)}
                  className="flex-1 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 
                    border border-slate-600 text-white font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmEarlySubmit}
                  className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 
                    border border-emerald-500 text-white font-semibold"
                >
                  Yes, Submit
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-3 mt-8">
          {!hasSelected && (
            <button
              onClick={handleCancel}
              className="flex-1 py-3 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 
                border border-slate-600 text-white font-medium 
                transition-all duration-200 hover:border-slate-500"
            >
              Cancel
            </button>
          )}
          {hasSelected && (
            <button
              onClick={handleBack}
              disabled={isFirst}
              className="flex-1 py-3 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 
                border border-slate-600 text-white font-medium 
                transition-all duration-200 hover:border-slate-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 
              border border-emerald-500 text-white font-semibold 
              transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/20"
          >
            {isLast ? 'See Results' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}
