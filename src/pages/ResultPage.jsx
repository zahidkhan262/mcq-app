import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import ResultCard from '../components/ResultCard';

export default function ResultPage() {
  const navigate = useNavigate();
  const { getResults, resetQuiz, goBackToLengthSelection, currentQuestions, answers } = useQuiz();
  const results = getResults();
  const [showAttemptsModal, setShowAttemptsModal] = useState(false);

  const perQuestionAttempts = currentQuestions
    .map((q, index) => ({
      questionNum: index + 1,
      questionText: q.text,
      attempts: answers[q.id]?.attempts ?? 0,
    }))
    .filter((item) => item.attempts > 1);

  useEffect(() => {
    if (currentQuestions.length === 0) {
      navigate('/');
    }
  }, [currentQuestions.length, navigate]);

  if (currentQuestions.length === 0) {
    return null;
  }

  const passed = results.percentage >= 33;

  const handleRestart = () => {
    resetQuiz();
    navigate('/');
  };

  const handleTryAgain = () => {
    goBackToLengthSelection();
    navigate('/choose-attempts');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-lg text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Results</h1>

        {results.isEarlySubmit && (
          <p className="text-amber-400 text-sm mb-4">You submitted early. Score is based on {results.answeredCount} questions answered (of {results.total} total).</p>
        )}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <ResultCard label="Total Questions" value={results.total} />
          <ResultCard label="Correct Answers" value={results.correct} />
          <ResultCard label="Wrong Answers" value={results.wrong} />
          <ResultCard
            label="Total Attempts"
            value={results.totalAttempts}
            onClick={() => setShowAttemptsModal(true)}
          />
        </div>

        {showAttemptsModal && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
            onClick={() => setShowAttemptsModal(false)}
          >
            <div
              className="bg-slate-800 rounded-2xl border border-slate-700 max-w-lg w-full max-h-[80vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-slate-700 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">Attempts per Question</h2>
                <button
                  onClick={() => setShowAttemptsModal(false)}
                  className="text-slate-400 hover:text-white text-2xl leading-none"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <div className="p-6 overflow-y-auto space-y-3">
                {perQuestionAttempts.length === 0 ? (
                  <p className="text-slate-400 text-center py-8">
                    All questions were answered correctly on the first attempt.
                  </p>
                ) : (
                  perQuestionAttempts.map(({ questionNum, questionText, attempts }) => (
                  <div
                    key={questionNum}
                    className="bg-slate-800/60 rounded-xl p-4 border border-slate-700"
                  >
                    <p className="text-slate-400 text-sm font-medium mb-1">
                      Question {questionNum}
                    </p>
                    <p className="text-white text-sm line-clamp-2 mb-2">{questionText}</p>
                    <p className="text-white text-2xl font-bold">
                      {attempts} attempt{attempts !== 1 ? 's' : ''}
                    </p>
                  </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mb-10">
          <ResultCard label="Score" value={`${results.percentage}%`} />
        </div>

        <div
          className={`rounded-2xl p-8 mb-10 border-2 ${
            passed
              ? 'bg-emerald-500/20 border-emerald-500'
              : 'bg-red-500/20 border-red-500'
          }`}
        >
          <p className="text-3xl md:text-4xl font-bold mb-2">
            {passed ? 'GRADE: PASS' : 'GRADE: FAIL'}
          </p>
          <p className="text-lg text-slate-300">
            {passed
              ? `You Passed with ${results.percentage}%`
              : `You Scored ${results.percentage}%`}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleRestart}
            className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 
              border border-emerald-500 text-white font-semibold 
              transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/20"
          >
            Start Over
          </button>
          <button
            onClick={handleTryAgain}
            className="py-3 px-6 rounded-xl bg-slate-700 hover:bg-slate-600 
              border border-slate-600 text-white font-medium 
              transition-all duration-200"
          >
            Try Different Length
          </button>
        </div>
      </div>
    </div>
  );
}
