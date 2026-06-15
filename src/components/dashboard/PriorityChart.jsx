import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PriorityChart = () => {

  const data = [
    { name: "High", value: 10 },
    { name: "Medium", value: 15 },
    { name: "Low", value: 5 },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-4">
        Priority Distribution
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
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

    </div>
  );
};

export default PriorityChart;