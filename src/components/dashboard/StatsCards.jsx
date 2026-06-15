const StatsCards = ({
  total,
  completed,
  pending,
  overdue
}) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

      <div className="bg-blue-500 p-6 rounded shadow">
        <h3 className="font-bold text-white text-2xl">Total Tasks</h3>
        <p className="font-bold text-white">{total}</p>
      </div>

      <div className="bg-green-500 p-6 rounded shadow">
        <h3 className="font-bold text-white text-2xl">Completed</h3>
        <p className="font-bold text-white">{completed}</p>
      </div>

      <div className="bg-yellow-500 p-6 rounded shadow">
        <h3 className="font-bold text-white text-2xl">Pending</h3>
        <p className="font-bold text-white">{pending}</p>
      </div>

      <div className="bg-red-500 p-6 rounded shadow">
        <h3 className="font-bold text-white text-2xl">Overdue</h3>
        <p className="font-bold text-white">{overdue}</p>
      </div>

    </div>
  );
};

export default StatsCards;