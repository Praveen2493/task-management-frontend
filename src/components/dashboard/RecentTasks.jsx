import React from 'react'

const RecentTasks = () => {

 const tasks = [
    {
      id: 1,
      title: "UI Design",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Backend API",
      status: "Pending",
    },
    {
      id: 3,
      title: "Database Setup",
      status: "Completed",
    },
  ];

  return (
    <div className='bg-white rounded-xl shadow-md p-6'>
      <h2 className='text-lg font-black mb-4'>Recent Task</h2>

        {
            tasks.map((task)=> (
                <div key={task.id} className='border-b py-3'>
                <h3 className='font-semibold'>{task.title}</h3>
                <p className='text-gray-600'>{task.status}</p>
             </div>

            ))
        }

      

    </div>
  );
};

export default RecentTasks;
