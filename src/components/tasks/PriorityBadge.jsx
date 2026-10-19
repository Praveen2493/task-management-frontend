const priorityStyles = {
  high: "bg-rose-100 text-rose-800 ring-rose-200",
  medium: "bg-amber-100 text-amber-800 ring-amber-200",
  low: "bg-emerald-100 text-emerald-800 ring-emerald-200",
};

const PriorityBadge = ({ priority }) => {
  const normalizedPriority = String(priority || "Medium").trim().toLowerCase();
  const label = normalizedPriority.charAt(0).toUpperCase() + normalizedPriority.slice(1);

  return (
    <span className={`inline-flex shrink-0 items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${priorityStyles[normalizedPriority] || "bg-slate-100 text-slate-700 ring-slate-200"}`}>
      {label}
    </span>
  );
};

export default PriorityBadge;
