import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLORS = ["#f43f5e", "#f59e0b", "#10b981"];

const PriorityChart = ({ tasks = [] }) => {
  const priorities = ["High", "Medium", "Low"];
  const data = priorities.map((priority) => ({
    name: priority,
    value: tasks.filter((task) => task.priority?.toLowerCase() === priority.toLowerCase()).length,
  }));
  const hasTasks = data.some((item) => item.value > 0);

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-3">
        <h2 className="text-base font-bold text-slate-900">Priority Distribution</h2>
        <p className="mt-1 text-sm text-slate-500">All tasks grouped by priority</p>
      </div>
      {hasTasks ? (
        <ResponsiveContainer width="100%" height={150}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius={48} outerRadius={76} paddingAngle={4}>
              {data.map((entry, index) => <Cell key={entry.name} fill={COLORS[index]} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex h-[150px] items-center justify-center text-sm text-slate-400">No tasks to display yet</div>
      )}
      <div className="mt-1 flex justify-center gap-5">
        {data.map((item, index) => (
          <span key={item.name} className="flex items-center gap-2 text-xs text-slate-500">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: COLORS[index] }} />
            {item.name} <strong className="text-slate-700">{item.value}</strong>
          </span>
        ))}
      </div>
    </article>
  );
};

export default PriorityChart;
