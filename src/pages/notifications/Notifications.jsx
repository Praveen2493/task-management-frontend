import MainLayout from "../../layouts/MainLayout";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      message: "Task deadline approaching",
      time: "10 mins ago",
    },
    {
      id: 2,
      message: "Task assigned to you",
      time: "1 hour ago",
    },
    {
      id: 3,
      message: "Task status updated",
      time: "2 hours ago",
    },
  ];

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">
        Notifications
      </h1>

      <div className="space-y-4">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow"
          >
            <h3 className="font-medium">
              {item.message}
            </h3>

            <p className="text-gray-500 text-sm">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Notifications;