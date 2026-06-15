import MainLayout from "../../layouts/MainLayout";

import TaskDetailsCard from "../../components/tasks/TaskDetailsCard";
import AssignedUsers from "../../components/tasks/AssignedUsers";
import AttachmentSection from "../../components/tasks/AttachmentSection";
import CommentsSection from "../../components/tasks/CommentsSection";
import ActivityTimeline from "../../components/tasks/ActivityTimeline";

const TaskDetails = () => {

  const task = {
    title: "Frontend Development",
    description: "Build React Task Management App",
    priority: "High",
    status: "In Progress",
    deadline: "2026-06-10",
  };

  return (
    <MainLayout>

      <div className="space-y-6">

        <TaskDetailsCard task={task} />

        <AssignedUsers />

        <AttachmentSection />

        <CommentsSection />

        <ActivityTimeline />

      </div>

    </MainLayout>
  );
};

export default TaskDetails;