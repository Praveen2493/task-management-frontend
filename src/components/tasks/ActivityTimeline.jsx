import { FiActivity } from "react-icons/fi";

const activities = [
  "Task Created",
  "Assigned to Team",
  "Status Updated",
  "Comment Added",
];

const ActivityTimeline = () => (
  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="mb-5 flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
        <FiActivity size={17} />
      </span>
      <div>
        <h2 className="text-base font-bold text-slate-900">Activity timeline</h2>
        <p className="text-xs text-slate-500">Recent updates for this task</p>
      </div>
    </div>

    <ol className="space-y-0">
      {activities.map((item, index) => (
        <li key={item} className="relative flex gap-3 pb-5 last:pb-0">
          {index < activities.length - 1 && (
            <span aria-hidden="true" className="absolute left-[11px] top-6 h-full w-px bg-slate-200" />
          )}
          <span className={`relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-4 ring-white ${index === 0 ? "bg-violet-100 text-violet-700" : "bg-slate-100 text-slate-400"}`}>
            <span className={`h-2 w-2 rounded-full ${index === 0 ? "bg-violet-600" : "bg-slate-400"}`} />
          </span>
          <div className="flex min-h-6 items-center">
            <p className="text-sm font-medium text-slate-700">{item}</p>
          </div>
        </li>
      ))}
    </ol>
  </section>
);

export default ActivityTimeline;
