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

    toast.success(
      error?.response?.data?.message ||
      "Failed to create task"
    );
  }
};

  return (
    <MainLayout>
      <div className="text-center items-center mb-6">
      <h1 className="text-3xl font-bold mb-6">
        Create Task
      </h1>

    <div className="w-100 mx-auto">
      <TaskForm
        onSubmit={handleCreateTask}
      />
    </div>
      
      </div>
    </MainLayout>
  );
};

export default CreateTask;