import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import TaskDetailsCard from "../../components/tasks/TaskDetailsCard";
import AssignedUsers from "../../components/tasks/AssignedUsers";
import AttachmentSection from "../../components/tasks/AttachmentSection";
import CommentSection from "../../components/comments/CommentSection";
import ActivityTimeline from "../../components/tasks/ActivityTimeline";

import { getTaskById } from "../../api/taskApi";

const TaskDetails = () => {

  const { id } = useParams();

  const [task, setTask] = useState(null);

  useEffect(() => {
    fetchTask();
  }, [id]);

  const fetchTask = async () => {
    try {

      const response = await getTaskById(id);

      setTask(response.task);

    } catch (error) {

      console.log(error);

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

      <div className="space-y-6">

        <TaskDetailsCard task={task} />

        <AssignedUsers />

        <AttachmentSection />

        <CommentSection taskId={task._id} />

        <ActivityTimeline />

      </div>

    </MainLayout>

  );

};

export default TaskDetails;