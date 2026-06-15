const CategoryStats = () => {

  const categories = [
    {
      category: "Work",
      count: 12,
    },
    {
      category: "Personal",
      count: 8,
    },
    {
      category: "Project",
      count: 15,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-4">
        Category Statistics
      </h2>

      <div className="space-y-4">

        {categories.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border-b pb-2"
          >
            <span>{item.category}</span>

            <span className="font-semibold">
              {item.count}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
};

export default CategoryStats;