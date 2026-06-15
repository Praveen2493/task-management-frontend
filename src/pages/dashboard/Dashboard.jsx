import { useEffect, useState } from "react";
import CategoryStats from "../../components/dashboard/CategoryStats";
import PriorityChart from "../../components/dashboard/PriorityChart";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentTasks from "../../components/dashboard/RecentTasks";
import StatsCard from "../../components/dashboard/StatsCard";
import TaskCompletionChart from "../../components/dashboard/TaskCompletionChart";
import UpcomingDeadlines from "../../components/dashboard/UpcomingDeadlines";
import MainLayout from "../../layouts/MainLayout";
import { getTasks } from "../../api/taskApi";
//import StatsCards from "../../components/dashboard/StatsCards";
import TaskCard from "../../components/tasks/TaskCard";
import SearchBar from "../../components/tasks/SearchBar";
import TaskPieChart from "../../components/dashboard/TaskPieChart";
import TaskBarChart from "../../components/dashboard/TaskBarChart";
import StatCard from "../../components/dashboard/StatCard";
import { getDashboardStats } from "../../api/dashboardApi";
import StatusPieChart from "../../components/dashboard/StatusPieChart";
import PriorityBarChart from "../../components/dashboard/PriorityBarChart";

const Dashboard = () => {
  

  const [tasks, setTasks] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [stats, setStats] = useState({
  totalTasks: 0,
  completedTasks: 0,
  pendingTasks: 0,
  inProgressTasks: 0,
  highPriorityTasks: 0,
});

  useEffect(()=>{

  fetchTasks();
  fetchDashboard();

},[]);


  const fetchTasks = async() => {

    try {
      const response = await getTasks();

      setTasks(response.tasks);


    } catch (error) {
       console.log(error);
    }
  }


  const fetchDashboard = async () => {
  try {

    const response = await getDashboardStats();

    console.log(response);

    setStats(response.stats);

  } catch (error) {

    console.log(error);

  }
};


  

  return (
    <MainLayout>
      <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">
        Dashboard Page
      </h1>

    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

         {/* Task List */}


         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mt-10">

          <StatCard
            title="Total Tasks"
            value={stats.totalTasks}
          />

          <StatCard
            title="Completed"
            value={stats.completedTasks}
          />

          <StatCard
            title="Pending"
            value={stats.pendingTasks}
          />

          <StatCard
            title="In Progress"
            value={stats.inProgressTasks}
          />

          <StatCard
            title="High Priority"
            value={stats.highPriorityTasks}
          />

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

          <StatusPieChart stats={stats} />

          <PriorityBarChart stats={stats} />

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

        {/* <TaskPieChart tasks = {tasks}/>

        <TaskBarChart tasks={tasks}/> */}


          <RecentTasks/>

          <UpcomingDeadlines/>
        </div>



         <TaskCompletionChart/>

        <PriorityChart/>

        <div className="mt-8">
        <CategoryStats/>
      </div>


      <QuickActions/>
    </div>
    </MainLayout>
    
  );
};

export default Dashboard;
