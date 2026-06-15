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
    <div className="flex flex-col md:flex-row gap-4 mb-6">



      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        className="border p-2 rounded-lg flex-1"
      />



        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded p-2"
        >
          <option>All</option>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded p-2"
      >
        <option>All</option>
        <option>Work</option>
        <option>Personal</option>
      </select>

     <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border rounded p-2"
      >
        <option>All</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      className="border rounded p-2"
    >
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
      <option value="deadline">Deadline</option>
    </select>

    </div>
  )
}

export default TaskFilters;
