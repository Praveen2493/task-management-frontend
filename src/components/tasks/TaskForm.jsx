import { useState } from "react";

const TaskForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState( initialData ||{
    
    title: "",
    description: "",
    category: "",
    priority: "Medium",
    status: "Pending",
    deadline: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const inputClassName = "w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100";

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
      <div>
        <label htmlFor="task-title" className="mb-1.5 block text-sm font-semibold text-slate-700">Task title</label>
        <input id="task-title" type="text" name="title" placeholder="Enter a task title" value={formData.title} onChange={handleChange} required className={inputClassName} />
      </div>
      <div>
        <label htmlFor="task-category" className="mb-1.5 block text-sm font-semibold text-slate-700">Category</label>
        <input id="task-category" type="text" name="category" placeholder="e.g. Design, Development" value={formData.category} onChange={handleChange} className={inputClassName} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="task-description" className="mb-1.5 block text-sm font-semibold text-slate-700">Description</label>
        <textarea id="task-description" name="description" placeholder="Add details about this task" rows={4} value={formData.description} onChange={handleChange} className={`${inputClassName} resize-y`} />
      </div>
      <div>
        <label htmlFor="task-priority" className="mb-1.5 block text-sm font-semibold text-slate-700">Priority</label>
        <select id="task-priority" name="priority" value={formData.priority} onChange={handleChange} className={inputClassName}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
      <div>
        <label htmlFor="task-status" className="mb-1.5 block text-sm font-semibold text-slate-700">Status</label>
        <select id="task-status" name="status" value={formData.status} onChange={handleChange} className={inputClassName}>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>
      <div>
        <label htmlFor="task-deadline" className="mb-1.5 block text-sm font-semibold text-slate-700">Due date</label>
        <input id="task-deadline" type="date" name="deadline" value={formData.deadline ? String(formData.deadline).slice(0, 10) : ""} onChange={handleChange} className={inputClassName} />
      </div>
      <div className="flex items-end sm:justify-end">
        <button type="submit" className="w-full rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-violet-200 transition hover:bg-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 sm:w-auto">
          {initialData ? "Save changes" : "Create task"}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;