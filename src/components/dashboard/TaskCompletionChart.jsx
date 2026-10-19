import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TaskCompletionChart = ({ stats }) => {
  const completed = Number(stats?.completedTasks) || 0;
  const total = Number(stats?.totalTasks) || 0;
  const data = [
    { name: "Completed", tasks: completed, fill: "#10b981" },
    { name: "Remaining", tasks: Math.max(total - completed, 0), fill: "#cbd5e1" },
  ];
  const completionRate = total ? Math.round((completed / total) * 100) : 0;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-slate-900">Task Completion Report</h2>
          <p className="mt-1 text-sm text-slate-500">Completed tasks compared with the remaining workload</p>
        </div>
        <span className="rounded-xl bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-700">{completionRate}%</span>
      </div>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
          <CartesianGrid stroke="#eef2f7" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
          <YAxis allowDecimals={false} axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 11 }} />
          <Tooltip cursor={{ fill: "#f8fafc" }} />
          <Bar dataKey="tasks" name="Tasks" radius={[7, 7, 0, 0]} barSize={46}>
            {data.map((entry) => <Cell key={entry.name} fill={entry.fill} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </article>
  );
};

export default TaskCompletionChart;
