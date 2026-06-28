import React from 'react'
import PriorityBadge from './PriorityBadge'
import StatusBadge from './StatusBadge';
import { Link } from 'react-router-dom';

const TaskCard = ({
  task, 
  onDelete,
}) => {

  //console.log(task);

  return (
    <div className='bg-white rounded-xl shadow-md p-5'>
        <div className='flex justify-between items-start mb-4'>
           <h3 className="text-xl font-semibold">{task.title}</h3>

           <PriorityBadge priority={task.priority}/>
        </div>

         <p className="text-gray-600 mb-4">
          {task.description}
        </p>

          <div className="flex justify-between items-center">

          <StatusBadge
            status={task.status}
          />

          <span className="text-sm text-red-500">
            {task.deadline
              ? new Date(task.deadline).toLocaleDateString()
              : "No Deadline"}
          </span>


        </div>

        <div className="mt-4 flex gap-2">

            <Link
              to={`/task/${task._id}`}
              className="bg-green-600 text-white px-3 py-2 rounded-lg"
          >
              View Details
          </Link>

        <Link
          to={`/tasks/edit/${task._id}`}
          className="bg-blue-600 text-white px-3 py-2 rounded-lg"
        >
          Edit
        </Link>

        <button onClick={() => onDelete(task._id)} className="bg-red-600 text-white px-3 py-2 rounded-lg">
          Delete
        </button>

      </div> 
    </div>
  )
}

export default TaskCard;
