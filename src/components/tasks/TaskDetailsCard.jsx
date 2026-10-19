import { FiCalendar, FiClock, FiFileText } from "react-icons/fi";
import PriorityBadge from "./PriorityBadge";
import StatusBadge from "./StatusBadge";

const TaskDetailsCard = ({ task }) => {
  const dueDate = task.deadline
    ? new Date(task.deadline).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    : "No due date";

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="h-1.5 bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500" />
      <div className="p-5 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">Task overview</p>
            <h1 className="break-words text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {task.title}
            </h1>
          </div>
          <PriorityBadge priority={task.priority} />
        </div>

        <div className="mt-4 flex items-start gap-2.5 text-sm leading-6 text-slate-600">
          <FiFileText size={17} className="mt-1 shrink-0 text-slate-400" />
          <p>{task.description || "No description provided for this task."}</p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5">
          <StatusBadge status={task.status} />
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-600">
            <FiCalendar size={15} className="text-slate-400" />
            Due {dueDate}
          </span>
          {task.createdAt && (
            <span className="inline-flex items-center gap-2 text-xs text-slate-400">
              <FiClock size={14} />
              Created {new Date(task.createdAt).toLocaleDateString()}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default TaskDetailsCard;
