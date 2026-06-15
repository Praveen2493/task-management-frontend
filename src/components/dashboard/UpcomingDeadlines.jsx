import React from 'react'

const UpcomingDeadlines = () => {


    const deadlines = [
    {
      id: 1,
      task: "Frontend Completion",
      date: "20 May 2026",
    },
    {
      id: 2,
      task: "Backend APIs",
      date: "22 May 2026",
    },
    {
      id: 3,
      task: "Deployment",
      date: "25 May 2026",
    },
  ];


  return (
    <div className='bg-white rounded-xl shadow-lg p-6'>
        <h2 className="text-xl font-bold mb-4">Upcoming Deadlines</h2>
        {
          deadlines.map((item)=>(
             <div key={item.id} className='border-b py-3'>
            <h3 className='font-semibold'>{item.task}</h3>
            <p className='text-gray-600'>{item.date}</p>
          </div>
          ))
        }
       
    </div>
  )
}

export default UpcomingDeadlines;
