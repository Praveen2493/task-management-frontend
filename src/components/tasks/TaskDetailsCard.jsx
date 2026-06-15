import PriorityBadge from "./PriorityBadge";
import StatusBadge from "./StatusBadge";

const TaskDetailsCard = ({ task }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <div className="flex justify-between mb-4">

        <h2 className="text-2xl font-bold">
          {task.title}
        </h2>

        <PriorityBadge
          priority={task.priority}
        />

      </div>

      <p className="text-gray-600 mb-4">
        {task.description}
      </p>

      <div className="flex gap-4">

        <StatusBadge
          status={task.status}
        />

        <span className="text-red-500">
          Due: {task.deadline}
        </span>

      </div>

    </div>
  );
};

export default TaskDetailsCard;