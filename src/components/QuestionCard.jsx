import OptionButton from './OptionButton';

export default function QuestionCard({
  question,
  answer,
  onOptionSelect,
}) {
  const isLocked = answer?.isCorrect === true;

  const getOptionStatus = (option) => {
    if (!answer) return 'default';
    if (answer.selectedOptionId === option.id) {
      return option.isCorrect ? 'correct' : 'wrong';
    }
    return 'default';
  };

  return (
    <div className="bg-slate-800/60 rounded-2xl p-6 md:p-8 border border-slate-700 shadow-xl">
      <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 leading-relaxed">
        {question.text}
      </h2>
      <div className="space-y-3">
        {question.options.map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            status={getOptionStatus(option)}
            onClick={() => !isLocked && onOptionSelect(option)}
            disabled={isLocked}
          />
        ))}
      </div>
    </div>
  );
}
