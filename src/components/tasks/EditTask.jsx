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
    fetchTask();
  }, []);

  const fetchTask = async () => {
    try {

      const response = await getTaskById(id);

      setTask(response.task);

    } catch (error) {

      console.log(error);

      toast.error("Unable to load task");

    }
  };

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

      <h1 className="text-3xl font-bold mb-6">
        Edit Task
      </h1>

      <TaskForm
        initialData={task}
        onSubmit={handleUpdate}
      />

    </MainLayout>
  );
};

export default EditTask;