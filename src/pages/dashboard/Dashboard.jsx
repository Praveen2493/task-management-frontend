import { useEffect, useState } from "react";
import { FiCheckCircle, FiClock, FiList, FiTrendingUp, FiAlertCircle } from "react-icons/fi";
import { getDashboardStats } from "../../api/dashboardApi";
import { getTasks } from "../../api/taskApi";
import PriorityBarChart from "../../components/dashboard/PriorityBarChart";
import PriorityChart from "../../components/dashboard/PriorityChart";
import StatCard from "../../components/dashboard/StatCard";
import StatusPieChart from "../../components/dashboard/StatusPieChart";
import TaskCompletionChart from "../../components/dashboard/TaskCompletionChart";
import MainLayout from "../../layouts/MainLayout";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [stats, setStats] = useState({
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0,
    inProgressTasks: 0,
    highPriorityTasks: 0,
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const [taskResponse, dashboardResponse] = await Promise.all([
          getTasks({ limit: 100 }),
          getDashboardStats(),
        ]);
        setTasks(taskResponse.tasks || []);
        setStats(dashboardResponse.stats);
      } catch (error) {
        console.error("Unable to load dashboard data", error);
      }
    };

    fetchDashboard();
  }, []);

  const cards = [
    { title: "Total tasks", value: stats.totalTasks, icon: FiList, color: "blue" },
    { title: "Completed", value: stats.completedTasks, icon: FiCheckCircle, color: "emerald" },
    { title: "Pending", value: stats.pendingTasks, icon: FiClock, color: "amber" },
    { title: "In progress", value: stats.inProgressTasks, icon: FiTrendingUp, color: "violet" },
    { title: "High priority", value: stats.highPriorityTasks, icon: FiAlertCircle, color: "rose" },
  ];

  return (
    <MainLayout>
      <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="mb-1 text-sm font-semibold uppercase tracking-[0.16em] text-violet-600">Workspace overview</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
          <p className="mt-1 text-sm text-slate-500">A clear view of your team’s workload and progress.</p>
        </div>
      </div>

      <section aria-label="Task summary" className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
        {cards.map((card) => <StatCard key={card.title} {...card} />)}
      </section>

      <section aria-label="Task analytics" className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <TaskCompletionChart stats={stats} />
        <PriorityBarChart stats={stats} />
        <StatusPieChart stats={stats} />
        <PriorityChart tasks={tasks} />
      </section>
    </MainLayout>
  );
};

export default Dashboard;
