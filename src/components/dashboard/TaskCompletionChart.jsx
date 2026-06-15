import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TaskCompletionChart = () => {

  const data = [
    { month: "Jan", completed: 12 },
    { month: "Feb", completed: 18 },
    { month: "Mar", completed: 25 },
    { month: "Apr", completed: 20 },
    { month: "May", completed: 30 },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-4">
        Task Completion Report
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="completed" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default TaskCompletionChart;