const AttachmentSection = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-4">
        Attachments
      </h2>

      <input
        type="file"
        className="border p-2 rounded-lg w-full"
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