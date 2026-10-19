const colorClasses = {
  blue: "bg-blue-50 text-blue-600 ring-blue-100",
  emerald: "bg-emerald-50 text-emerald-600 ring-emerald-100",
  amber: "bg-amber-50 text-amber-600 ring-amber-100",
  violet: "bg-violet-50 text-violet-600 ring-violet-100",
  rose: "bg-rose-50 text-rose-600 ring-rose-100",
};

const StatCard = ({ title, value, icon: Icon, color = "blue" }) => (
  <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-5">
    <div className="flex items-start justify-between gap-2">
      <p className="text-xs font-semibold text-slate-500 sm:text-sm">{title}</p>
      {Icon && (
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ring-1 ${colorClasses[color] || colorClasses.blue}`}>
          <Icon size={17} />
        </span>
      )}
    </div>
    <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{value}</p>
  </article>
);

export default StatCard;
