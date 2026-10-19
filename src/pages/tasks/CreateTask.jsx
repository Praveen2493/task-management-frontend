import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import TaskForm from "../../components/tasks/TaskForm";
import { createTask } from "../../api/taskApi";
import toast from "react-hot-toast";

const CreateTask = () => {
  const navigate = useNavigate();

  const handleCreateTask = async (taskData) => {
  try {
    const response = await createTask(taskData);

    console.log("Task Created:", response);

    toast.success("Task Created Successfully");

    // Navigate back to Tasks page
    navigate("/tasks");

  } catch (error) {
    console.error(error);

    toast.error(
      error?.response?.data?.message ||
      "Failed to create task"
    );
  }
};

  return (
    <MainLayout>
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <p className="mb-1 text-sm font-semibold uppercase tracking-[0.16em] text-violet-600">Task workspace</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Create a task</h1>
          <p className="mt-1 text-sm text-slate-500">Add a new task and keep the next steps clear.</p>
        </div>
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <TaskForm onSubmit={handleCreateTask} />
        </section>
      </div>
    </MainLayout>
  );
};

export default CreateTask;