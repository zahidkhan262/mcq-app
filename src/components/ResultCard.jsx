export default function ResultCard({ label, value, onClick }) {
  const baseClasses =
    'bg-slate-800/60 rounded-xl p-4 border border-slate-700 ' +
    (onClick
      ? 'cursor-pointer hover:bg-slate-700/60 hover:border-slate-600 transition-colors'
      : '');

  return (
    <div
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
      className={baseClasses}
    >
      <p className="text-slate-400 text-sm font-medium">{label}</p>
      <p className="text-white text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}
