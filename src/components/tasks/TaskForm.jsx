import { useEffect, useState } from "react";

const TaskForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState( initialData ||{
    
    title: "",
    description: "",
    category: "",
    priority: "Medium",
    status: "Pending",
    deadline: "",
  });


  useEffect(() => {
  if (initialData) {
    setFormData(initialData);
  }
}, [initialData]);

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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div>
        <label htmlFor="task-title" className="mb-1.5 block text-sm font-semibold text-slate-700">Task title</label>
        <input
          id="task-title"
          type="text"
          name="title"
          placeholder="Enter a task title"
          value={formData.title}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-300 bg-white p-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label htmlFor="task-description" className="mb-1.5 block text-sm font-semibold text-slate-700">Description</label>
        <textarea
          id="task-description"
          name="description"
          placeholder="Describe the task"
          value={formData.description}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-300 bg-white p-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label htmlFor="task-category" className="mb-1.5 block text-sm font-semibold text-slate-700">Category</label>
        <input
          id="task-category"
          type="text"
          name="category"
          placeholder="Enter a category"
          value={formData.category}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-300 bg-white p-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label htmlFor="task-priority" className="mb-1.5 block text-sm font-semibold text-slate-700">Priority</label>
        <select
          id="task-priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-300 bg-white p-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <div>
        <label htmlFor="task-status" className="mb-1.5 block text-sm font-semibold text-slate-700">Status</label>
        <select
          id="task-status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-300 bg-white p-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>

      <div>
        <label htmlFor="task-deadline" className="mb-1.5 block text-sm font-semibold text-slate-700">Due date</label>
        <input
          id="task-deadline"
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-300 bg-white p-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Create Task
      </button>

    </form>
  );
};

export default TaskForm;