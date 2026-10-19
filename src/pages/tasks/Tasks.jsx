import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import TaskFilters from "../../components/tasks/TaskFilters";
import TaskCard from "../../components/tasks/TaskCard";
import EmptyState from "../../components/common/EmptyState";

import { deleteTask, getTasks } from "../../api/taskApi";
import Pagination from "../../components/common/Pagination";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [category, setCategory] = useState("All");

  const [status, setStatus] = useState("All");

const [priority, setPriority] = useState("All");

const [page, setPage] = useState(1);

const [totalPages, setTotalPages] = useState(1);

const [sort, setSort] = useState("newest");
const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    let active = true;
    const loadTasks = async () => {
      try {
        const response = await getTasks({
          search: searchTerm,
          category,
          status,
          priority,
          sort,
          page,
          limit: 10,
        });
        if (active) {
          setTasks(response.tasks);
          setTotalPages(response.totalPages);
        }
      } catch (error) {
        if (active) console.error(error);
      }
    };

    loadTasks();
    return () => {
      active = false;
    };
  }, [searchTerm, category, status, priority, sort, page, refresh]);

  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this task?"
  );

  if (!confirmDelete) return;

  try {

    await deleteTask(id);

    setRefresh((current) => current + 1);

  } catch (error) {

    console.log(error);

  }
};

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" ||
      task.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-1 text-sm font-semibold uppercase tracking-[0.16em] text-violet-600">Task workspace</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Tasks</h1>
          <p className="mt-1 text-sm text-slate-500">Plan, prioritize, and track your work.</p>
        </div>
        <Link
          to="/tasks/create"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-violet-200 transition hover:bg-violet-700"
        >
          + Create task
        </Link>
      </div>

      {/* Filters */}
      <TaskFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}

        category={category}
        setCategory={setCategory}

         status={status}
        setStatus={setStatus}

        priority={priority}
        setPriority={setPriority}

        sort={sort}
        setSort={setSort}
      />

      {/* Task List */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

        {filteredTasks.length === 0 ? (
          <EmptyState title="No Tasks Found" />
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onDelete={handleDelete}
            />
          ))
        )}

      </div>

      <Pagination
      currentPage={page}
      totalPages={totalPages}
      onPageChange={setPage}
    />

    </MainLayout>
  );
};

export default Tasks;