import { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import toast from "react-hot-toast";
import { assignTask } from "../../api/taskApi";
import { getUsers } from "../../api/userApi";

const AssignedUsers = ({ task, canManage, onUpdated }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!canManage) return;
    let active = true;
    getUsers()
      .then((response) => {
        if (active) setUsers(response.users || []);
      })
      .catch((error) => {
        console.error("Unable to load users for task assignment", error);
        if (active) toast.error(error.response?.data?.message || "Unable to load users");
      });
    return () => {
      active = false;
    };
  }, [canManage]);

  const handleAssign = async (event) => {
    event.preventDefault();
    if (!selectedUser) return;

    try {
      setSaving(true);
      await assignTask(task._id, selectedUser);
      setSelectedUser("");
      await onUpdated();
      toast.success("Task assigned");
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to assign task");
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <FiUsers size={17} />
        </span>
        <div>
          <h2 className="text-base font-bold text-slate-900">Task assignment</h2>
          <p className="text-xs text-slate-500">The assignee receives a notification and deadline reminder.</p>
        </div>
      </div>
      {task.assignedTo ? (
        <p className="mb-4 text-sm text-slate-700">
          Assigned to <span className="font-semibold">{task.assignedTo.name || task.assignedTo.email}</span>
        </p>
      ) : (
        <p className="mb-4 text-sm text-slate-500">No one is assigned to this task.</p>
      )}
      {canManage && (
        <form onSubmit={handleAssign} className="flex flex-col gap-2 sm:flex-row">
          <label className="sr-only" htmlFor="task-assignee">Assign task to</label>
          <select
            id="task-assignee"
            value={selectedUser}
            onChange={(event) => setSelectedUser(event.target.value)}
            required
            className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
          >
            <option value="">Choose a teammate</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>{user.name} ({user.email})</option>
            ))}
          </select>
          <button
            type="submit"
            disabled={saving || !selectedUser}
            className="rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving ? "Assigning…" : "Assign task"}
          </button>
        </form>
      )}
    </section>
  );
};

export default AssignedUsers;
