import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const TaskPieChart = ({ tasks }) => {

  const data = [
    {
      name: "Completed",
      value: tasks.filter(
        task => task.status === "Completed"
      ).length,
    },
    {
      name: "Pending",
      value: tasks.filter(
        task => task.status === "Pending"
      ).length,
    },
    {
      name: "In Progress",
      value: tasks.filter(
        task => task.status === "In Progress"
      ).length,
    },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">

      <h2 className="text-lg font-bold mb-4">
        Task Status Overview
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          />

          <Tooltip />

          <Legend />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
};

export default TaskPieChart;