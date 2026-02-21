import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';

export default function SubjectSelection() {
  const navigate = useNavigate();
  const { subjects, selectSubject } = useQuiz();

  const handleSubjectClick = (subjectId) => {
    selectSubject(subjectId);
    navigate('/choose-attempts');
  };

  const subjectList = Object.values(subjects);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">MCQ Practice</h1>
        <p className="text-slate-400 text-lg">Select a subject to begin</p>
      </div>

      <div className="grid gap-4 w-full max-w-md">
        {subjectList.map((subject) => (
          <button
            key={subject.id}
            onClick={() => handleSubjectClick(subject.id)}
            className="w-full py-5 px-6 rounded-xl bg-slate-700/50 hover:bg-slate-600/60 
              border border-slate-600 hover:border-emerald-500/50 
              text-white text-xl font-semibold 
              transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/10 
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            {subject.name}
          </button>
        ))}
      </div>

      {subjectList.length === 0 && (
        <p className="text-slate-500 mt-6">Loading subjects...</p>
      )}
    </div>
  );
}
