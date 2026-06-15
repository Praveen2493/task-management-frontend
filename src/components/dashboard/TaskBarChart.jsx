import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TaskBarChart = ({ tasks }) => {

  const data = [
    {
      priority: "High",
      count: tasks.filter(
        task => task.priority === "High"
      ).length,
    },
    {
      priority: "Medium",
      count: tasks.filter(
        task => task.priority === "Medium"
      ).length,
    },
    {
      priority: "Low",
      count: tasks.filter(
        task => task.priority === "Low"
      ).length,
    },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">

      <h2 className="text-lg font-bold mb-4">
        Task Priority Overview
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>

          <XAxis dataKey="priority" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="count" />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
};

export default TaskBarChart;