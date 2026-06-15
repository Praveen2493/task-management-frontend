const ActivityTimeline = () => {

  const activities = [
    "Task Created",
    "Assigned to Team",
    "Status Updated",
    "Comment Added",
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-4">
        Activity Timeline
      </h2>

      <ul className="space-y-3">

        {activities.map((item, index) => (
          <li
            key={index}
            className="border-l-4 border-blue-500 pl-4"
          >
            {item}
          </li>
        ))}

      </ul>

    </div>
  );
};

export default ActivityTimeline;