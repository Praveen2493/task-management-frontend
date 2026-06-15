import { useState } from "react";

const ProfileImageUpload = ({ onUpload }) => {

  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) return;

    onUpload(file);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6"
    >

      <input
        type="file"
        accept="image/*"
        className="w-75 px-2 rounded"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded mt-3"
      >
        Upload Image
      </button>

    </form>
  );
};

export default ProfileImageUpload;