export default function OptionButton({ option, status, onClick, disabled }) {
  const baseClasses =
    'w-full text-left py-3 px-4 rounded-xl border-2 transition-all duration-200 ' +
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed';

  const statusClasses = {
    default:
      'bg-slate-700/50 border-slate-600 hover:bg-slate-600/60 hover:border-slate-500 text-white',
    correct:
      'bg-emerald-500/20 border-emerald-500 text-emerald-100',
    wrong:
      'bg-red-500/20 border-red-500 text-red-100',
  };

  const classes = `${baseClasses} ${statusClasses[status] || statusClasses.default}`;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      <span className="font-medium mr-2">{option.id}.</span>
      {option.text}
    </button>
  );
}
