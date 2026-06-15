import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const PriorityBarChart = ({ stats }) => {

  const data = {
    labels: [
      "High",
    ],

    datasets: [
      {
        label: "Tasks",
        data: [
          stats.highPriorityTasks,
        ],
      },
    ],
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow">

      <h2 className="text-xl font-bold mb-4">
        High Priority Tasks
      </h2>

      <Bar data={data} />

    </div>
  );
};

export default PriorityBarChart;