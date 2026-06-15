import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const StatusPieChart = ({ stats }) => {

  const data = {
    labels: [
      "Completed",
      "Pending",
      "In Progress",
    ],

    datasets: [
      {
        data: [
          stats.completedTasks,
          stats.pendingTasks,
          stats.inProgressTasks,
        ],
      },
    ],
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow">

      <h2 className="text-xl font-bold mb-4">
        Task Status
      </h2>

      <Pie data={data} />

    </div>
  );
};

export default StatusPieChart;