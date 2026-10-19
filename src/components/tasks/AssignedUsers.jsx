import { FiUsers } from "react-icons/fi";

const users = ["Praveen", "John", "David"];

const AssignedUsers = () => (
  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
    <div className="mb-4 flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <FiUsers size={17} />
      </span>
      <div>
        <h2 className="text-base font-bold text-slate-900">Assigned users</h2>
        <p className="text-xs text-slate-500">People working on this task</p>
      </div>
    </div>
    <div className="flex flex-wrap gap-2">
      {users.map((user, index) => (
        <span
          key={user}
          className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-sm font-medium text-blue-700"
        >
          <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${index === 0 ? "bg-blue-200 text-blue-800" : "bg-white text-blue-600"}`}>
            {user.charAt(0)}
          </span>
          {user}
        </span>
      ))}
    </div>
  </section>
);

export default AssignedUsers;
