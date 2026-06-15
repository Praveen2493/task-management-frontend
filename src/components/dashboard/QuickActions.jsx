import { Link } from "react-router-dom";

const QuickActions = () => {
  return (
    <div
      className="
        bg-white
        p-6
        rounded-xl
        shadow
      "
    >

      <h2 className="text-xl font-bold mb-4">
        Quick Actions
      </h2>

      <div className="flex gap-3 flex-wrap">

        <Link
          to="/tasks/create"
          className="
            bg-blue-600
            text-white
            px-4
            py-2
            rounded-lg
          "
        >
          Create Task
        </Link>

        <Link
          to="/tasks"
          className="
            bg-green-600
            text-white
            px-4
            py-2
            rounded-lg
          "
        >
          View Tasks
        </Link>

      </div>

    </div>
  );
};

export default QuickActions;