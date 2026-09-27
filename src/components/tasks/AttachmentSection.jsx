const AttachmentSection = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-4">
        Attachments
      </h2>

      <label htmlFor="task-attachment" className="mb-1.5 block text-sm font-semibold text-slate-700">
        Choose a file
      </label>
      <input
        id="task-attachment"
        type="file"
        className="w-full rounded-md border border-slate-300 bg-white p-2.5 text-sm"
      />

      <div className="mt-4">

        <p className="text-gray-600">
          project-document.pdf
        </p>

      </div>

    </div>
  );
};

export default AttachmentSection;