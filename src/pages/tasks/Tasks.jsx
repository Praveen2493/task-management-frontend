import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    fetchTasks();
  }, [searchTerm,
  category,
  status,
  priority,
  sort,
  page,
]);

  const fetchTasks = async () => {
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

     // console.log("Tasks:", response);

      setTasks(response.tasks);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.log(error);
    }
  };



  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this task?"
  );

  if (!confirmDelete) return;

  try {

    await deleteTask(id);

    fetchTasks();

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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Tasks
        </h1>

        <Link
          to="/tasks/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Create Task
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

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