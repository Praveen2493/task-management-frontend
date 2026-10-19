import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const PriorityBarChart = ({ stats }) => {
  const data = {
    labels: ["High priority"],
    datasets: [{
      data: [Number(stats?.highPriorityTasks) || 0],
      backgroundColor: ["#f43f5e"],
      borderRadius: 8,
      barThickness: 34,
    }],
  };
  const options = {
    indexAxis: "y",
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { displayColors: false } },
    scales: {
      x: { beginAtZero: true, ticks: { precision: 0, color: "#94a3b8" }, grid: { color: "#eef2f7" }, border: { display: false } },
      y: { ticks: { color: "#64748b" }, grid: { display: false }, border: { display: false } },
    },
  };

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-3">
        <h2 className="text-base font-bold text-slate-900">High Priority Tasks</h2>
        <p className="mt-1 text-sm text-slate-500">Tasks that need attention first</p>
      </div>
      <div className="h-[150px]">
        <Bar data={data} options={options} />
      </div>
    </article>
  );
};

export default PriorityBarChart;
