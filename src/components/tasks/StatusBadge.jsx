const statusStyles = {
  pending: "bg-amber-100 text-amber-800 ring-amber-200",
  "in progress": "bg-blue-100 text-blue-800 ring-blue-200",
  completed: "bg-emerald-100 text-emerald-800 ring-emerald-200",
};

const StatusBadge = ({ status }) => {
  const normalizedStatus = String(status || "Pending").trim().toLowerCase();
  const label = normalizedStatus.replace(/\b\w/g, (character) => character.toUpperCase());

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${statusStyles[normalizedStatus] || "bg-slate-100 text-slate-700 ring-slate-200"}`}>
      {label}
    </span>
  );
};

export default StatusBadge;
