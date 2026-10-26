import { useEffect, useState } from "react";
import { FiShare2, FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";
import { removeTaskShare, shareTask } from "../../api/taskApi";
import { getUsers } from "../../api/userApi";

const TaskSharing = ({ task, canManage, onUpdated }) => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  const [permission, setPermission] = useState("view");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!canManage) return;
    let active = true;
    getUsers()
      .then((response) => {
        if (active) setUsers(response.users || []);
      })
      .catch((error) => {
        console.error("Unable to load users for task sharing", error);
        if (active) toast.error(error.response?.data?.message || "Unable to load users");
      });
    return () => {
      active = false;
    };
  }, [canManage]);

  const handleShare = async (event) => {
    event.preventDefault();
    if (!userId) return;
    try {
      setSaving(true);
      await shareTask(task._id, userId, permission);
      setUserId("");
      await onUpdated();
      toast.success("Task access updated");
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to share task");
    } finally {
      setSaving(false);
    }
  };

  const handleRemove = async (sharedUserId) => {
    try {
      await removeTaskShare(task._id, sharedUserId);
      await onUpdated();
      toast.success("Task access removed");
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to remove task access");
    }
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
          <FiShare2 size={17} />
        </span>
        <div>
          <h2 className="text-base font-bold text-slate-900">Shared access</h2>
          <p className="text-xs text-slate-500">Choose whether teammates can view or edit this task.</p>
        </div>
      </div>

      {task.sharedWith?.length > 0 ? (
        <ul className="mb-4 divide-y divide-slate-100">
          {task.sharedWith.map((share) => (
            <li key={share._id || share.userId?._id} className="flex items-center justify-between gap-3 py-2.5">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-800">
                  {share.userId?.name || share.userId?.email || "Collaborator"}
                </p>
                <p className="text-xs capitalize text-slate-500">{share.permission} access</p>
              </div>
              {canManage && (
                <button
                  type="button"
                  onClick={() => handleRemove(share.userId?._id || share.userId)}
                  aria-label={`Remove ${share.userId?.name || "collaborator"} access`}
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
                >
                  <FiTrash2 size={15} />
                </button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mb-4 text-sm text-slate-500">This task has not been shared.</p>
      )}

      {canManage && (
        <form onSubmit={handleShare} className="grid grid-cols-1 gap-2 sm:grid-cols-[minmax(0,1fr)_auto_auto]">
          <label className="sr-only" htmlFor="task-share-user">Teammate</label>
          <select
            id="task-share-user"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
            required
            className="min-w-0 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
          >
            <option value="">Choose a teammate</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>{user.name} ({user.email})</option>
            ))}
          </select>
          <label className="sr-only" htmlFor="task-share-permission">Permission</label>
          <select
            id="task-share-permission"
            value={permission}
            onChange={(event) => setPermission(event.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
          >
            <option value="view">View only</option>
            <option value="edit">Can edit</option>
          </select>
          <button
            type="submit"
            disabled={saving || !userId}
            className="rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving ? "Saving…" : "Share"}
          </button>
        </form>
      )}
    </section>
  );
};

export default TaskSharing;
