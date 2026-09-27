import React from 'react'

const TaskFilters = ({searchTerm, 
  setSearchTerm,
  filter,
  setFilter,
  category,
  setCategory,
  status,
  setStatus,
  priority,
  setPriority,
    sort,
  setSort,
}) => {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
      <div>
        <label htmlFor="task-search" className="mb-1.5 block text-sm font-semibold text-slate-700">Search tasks</label>
        <input
          id="task-search"
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          className="w-full rounded-md border border-slate-300 bg-white p-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label htmlFor="task-filter-status" className="mb-1.5 block text-sm font-semibold text-slate-700">Status</label>
        <select
          id="task-filter-status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full rounded-md border border-slate-300 bg-white p-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        >
          <option>All</option>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>

      <div>
        <label htmlFor="task-filter-category" className="mb-1.5 block text-sm font-semibold text-slate-700">Category</label>
        <select
          id="task-filter-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-md border border-slate-300 bg-white p-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        >
          <option>All</option>
          <option>Work</option>
          <option>Personal</option>
        </select>
      </div>

      <div>
        <label htmlFor="task-filter-priority" className="mb-1.5 block text-sm font-semibold text-slate-700">Priority</label>
        <select
          id="task-filter-priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full rounded-md border border-slate-300 bg-white p-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        >
          <option>All</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>

      <div>
        <label htmlFor="task-filter-sort" className="mb-1.5 block text-sm font-semibold text-slate-700">Sort by</label>
        <select
          id="task-filter-sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full rounded-md border border-slate-300 bg-white p-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="deadline">Deadline</option>
        </select>
      </div>
    </div>
  )
}

export default TaskFilters;
