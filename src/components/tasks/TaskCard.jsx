import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCalendar, FiEdit2, FiTrash2 } from "react-icons/fi";
import PriorityBadge from "./PriorityBadge";
import StatusBadge from "./StatusBadge";

const TaskCard = ({ task, onDelete }) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-slate-200/60">
    {task.imageUrl && (
      <img src={task.imageUrl} alt={task.title} className="h-40 w-full object-cover" />
    )}
    <div className="flex flex-1 flex-col p-5">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="line-clamp-2 text-lg font-bold leading-snug text-slate-900">{task.title}</h3>
        <PriorityBadge priority={task.priority} />
      </div>
      <p className="mb-4 line-clamp-3 min-h-[3.75rem] text-sm leading-6 text-slate-500">
        {task.description || "No description provided."}
      </p>
      {task.category && (
        <span className="mb-4 w-fit rounded-lg bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700">
          {task.category}
        </span>
      )}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <StatusBadge status={task.status} />
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <FiCalendar size={14} />
          {task.deadline ? new Date(task.deadline).toLocaleDateString() : "No due date"}
        </span>
      </div>
      {task.assignedTo && (
        <p className="mb-4 text-xs text-slate-500">
          Assigned to <span className="font-semibold text-slate-700">{task.assignedTo.name || task.assignedTo.email}</span>
        </p>
      )}
      <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-100 pt-4">
        <Link to={`/task/${task._id}`} className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-violet-600 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-violet-700 sm:text-sm">
          View task <FiArrowUpRight size={15} />
        </Link>
        <Link to={`/tasks/edit/${task._id}`} aria-label={`Edit ${task.title}`} title="Edit task" className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-3 py-2.5 text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
          <FiEdit2 size={16} />
        </Link>
        <button type="button" onClick={() => onDelete(task._id)} aria-label={`Delete ${task.title}`} title="Delete task" className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-3 py-2.5 text-slate-600 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700">
          <FiTrash2 size={16} />
        </button>
      </div>
    </div>
  </article>
);

export default TaskCard;
