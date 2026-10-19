import { ArcElement, Chart as ChartJS, DoughnutController, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(DoughnutController, ArcElement, Tooltip, Legend);

const StatusPieChart = ({ stats }) => {
  const data = {
    labels: ["Completed", "Pending", "In progress"],
    datasets: [{
      data: [
        Number(stats?.completedTasks) || 0,
        Number(stats?.pendingTasks) || 0,
        Number(stats?.inProgressTasks) || 0,
      ],
      backgroundColor: ["#10b981", "#f59e0b", "#8b5cf6"],
      borderColor: "#ffffff",
      borderWidth: 4,
      hoverOffset: 5,
    }],
  };
  const options = {
    maintainAspectRatio: false,
    cutout: "68%",
    plugins: {
      legend: { position: "bottom", labels: { usePointStyle: true, pointStyle: "circle", padding: 18, color: "#64748b", font: { size: 11 } } },
    },
  };

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-3">
        <h2 className="text-base font-bold text-slate-900">Task Status</h2>
        <p className="mt-1 text-sm text-slate-500">Current distribution by status</p>
      </div>
      <div className="mx-auto h-[150px] max-w-[380px]">
        <Doughnut data={data} options={options} />
      </div>
    </article>
  );
};

export default StatusPieChart;
