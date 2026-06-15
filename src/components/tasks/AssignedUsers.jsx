const AssignedUsers = () => {

  const users = [
    "Praveen",
    "John",
    "David",
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-4">
        Assigned Users
      </h2>

      <div className="flex gap-3 flex-wrap">

        {users.map((user, index) => (
          <div
            key={index}
            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
          >
            {user}
          </div>
        ))}

      </div>

    </div>
  );
};

export default AssignedUsers;