import { useNavigate, Link } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { useMemo } from 'react';

const PRESET_COUNTS = [10, 20, 30, 50, 100];

export default function QuestionLengthSelection() {
  const navigate = useNavigate();
  const { subjects, selectedSubject, selectQuestionCount } = useQuiz();

  const subjectData = subjects[selectedSubject] || {};
  const totalCount = subjectData.questions?.length || 0;

  const availableOptions = useMemo(() => {
    const presets = PRESET_COUNTS.filter((n) => n <= totalCount);
    if (totalCount > 100) {
      return [...presets, totalCount]; // Add "All questions" as last option
    }
    return presets;
  }, [totalCount]);

  const handleSelectCount = (count) => {
    selectQuestionCount(count);
    navigate('/quiz');
  };

  if (!selectedSubject) {
    navigate('/');
    return null;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-6">
      <Link
        to="/"
        className="absolute top-6 left-6 text-slate-400 hover:text-white transition-colors"
      >
        ← Back to subjects
      </Link>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          {subjectData.name}
        </h1>
        <p className="text-slate-400 text-lg">
          Total MCQs available: <span className="text-emerald-400 font-semibold">{totalCount}</span>
        </p>
      </div>

      <div className="w-full max-w-md space-y-4">
        <p className="text-slate-400 text-center mb-6">How many questions do you want to attempt?</p>
        {availableOptions.map((count) => (
          <button
            key={count}
            onClick={() => handleSelectCount(count)}
            className="w-full py-4 px-6 rounded-xl bg-slate-700/50 hover:bg-slate-600/60 
              border border-slate-600 hover:border-emerald-500/50 
              text-white text-lg font-medium 
              transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/10 
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            {count === totalCount && totalCount > 100 ? 'All Questions' : `${count} Questions`}
          </button>
        ))}
      </div>
    </div>
  );
}
