import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import toast from "react-hot-toast";
import CommentSection from "../../components/comments/CommentSection";
import ActivityTimeline from "../../components/tasks/ActivityTimeline";
import AssignedUsers from "../../components/tasks/AssignedUsers";
import AttachmentSection from "../../components/tasks/AttachmentSection";
import TaskDetailsCard from "../../components/tasks/TaskDetailsCard";
import { getTaskById } from "../../api/taskApi";
import MainLayout from "../../layouts/MainLayout";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    const loadTask = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await getTaskById(id);
        if (active) setTask(response.task);
      } catch (requestError) {
        console.error("Unable to load task details", requestError);
        if (active) {
          const message = requestError.response?.data?.message || "Unable to load this task.";
          setError(message);
          toast.error(message);
        }
      } finally {
        if (active) setLoading(false);
      }
    };

    loadTask();
    return () => {
      active = false;
    };
  }, [id]);

  return (
    <MainLayout>
      <div className="mx-auto max-w-5xl">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-[0.16em] text-violet-600">Task workspace</p>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Task details</h1>
          </div>
          <Link
            to="/tasks"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
          >
            <FiArrowLeft size={16} />
            All tasks
          </Link>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-sm text-slate-500 shadow-sm" role="status">
            Loading task details…
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm font-medium text-rose-700" role="alert">
            {error}
          </div>
        ) : task ? (
          <div className="space-y-5">
            <TaskDetailsCard task={task} />
            <AssignedUsers />
            <AttachmentSection />
            <CommentSection taskId={task._id} />
            <ActivityTimeline />
          </div>
        ) : null}
      </div>
    </MainLayout>
  );
};

export default TaskDetails;
