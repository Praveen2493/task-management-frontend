const SearchBar = ({
  searchTerm,
  setSearchTerm
}) => {

  return (
    <div>
      <label htmlFor="search-bar" className="mb-1.5 block text-sm font-semibold text-slate-700">
        Search tasks
      </label>
      <input
        id="search-bar"
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(
            e.target.value
          )
        }
        className="w-full rounded-md border border-slate-300 bg-white p-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
};

export default SearchBar;