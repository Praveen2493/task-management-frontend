import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import TaskForm from "../../components/tasks/TaskForm";

import {
  getTaskById,
  updateTask,
} from "../../api/taskApi";

import toast from "react-hot-toast";

const EditTask = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [task, setTask] = useState(null);

  useEffect(() => {
    let active = true;
    const loadTask = async () => {
      try {
        const response = await getTaskById(id);
        if (active) setTask(response.task);
      } catch (error) {
        console.error(error);
        if (active) toast.error("Unable to load task");
      }
    };

    loadTask();
    return () => {
      active = false;
    };
  }, [id]);

  const handleUpdate = async (formData) => {

    try {

      await updateTask(id, formData);

      toast.success("Task Updated Successfully");

      navigate("/tasks");

    } catch (error) {

      console.log(error);

      toast.error("Failed to update task");

    }

  };

  if (!task) {
    return (
      <MainLayout>
        <h2>Loading...</h2>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <p className="mb-1 text-sm font-semibold uppercase tracking-[0.16em] text-violet-600">Task workspace</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Edit task</h1>
          <p className="mt-1 text-sm text-slate-500">Update task details and save your changes.</p>
        </div>
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <TaskForm initialData={task} onSubmit={handleUpdate} />
        </section>
      </div>
    </MainLayout>
  );
};

export default EditTask;