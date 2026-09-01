import React from 'react';
import PriorityBadge from './PriorityBadge';
import StatusBadge from './StatusBadge';
import { Link } from 'react-router-dom';

const TaskCard = ({ task, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between">
      <div>
        {/* Uploaded Task Image */}
        {task.imageUrl && (
          <img
            src={task.imageUrl}
            alt={task.title}
            className="w-full h-40 object-cover"
          />
        )}

        <div className="p-5">
          {/* Header & Priority Badge */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
            <PriorityBadge priority={task.priority} />
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4 text-sm line-clamp-3">
            {task.description}
          </p>

          {/* Category Tag */}
          {task.category && (
            <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full mb-4">
              {task.category}
            </span>
          )}

          {/* Status and Deadline */}
          <div className="flex justify-between items-center pt-2 border-t border-gray-100">
            <StatusBadge status={task.status} />

            <span className="text-sm font-medium text-red-500">
              {task.deadline
                ? new Date(task.deadline).toLocaleDateString()
                : 'No Deadline'}
            </span>
          </div>

          {/* Assigned User Info */}
          {task.assignedTo && (
            <div className="mt-3 text-xs text-gray-500">
              Assigned to: <span className="font-medium text-gray-700">{task.assignedTo.name || task.assignedTo.email}</span>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-5 pt-0 flex gap-2">
        <Link
          to={`/task/${task._id}`}
          className="bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-2 rounded-lg font-medium transition-colors"
        >
          View Details
        </Link>

        <Link
          to={`/tasks/edit/${task._id}`}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-2 rounded-lg font-medium transition-colors"
        >
          Edit
        </Link>

        <button
          onClick={() => onDelete(task._id)}
          className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-2 rounded-lg font-medium transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;