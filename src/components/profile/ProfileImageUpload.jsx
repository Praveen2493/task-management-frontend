import { useState } from "react";
import { uploadProfileImage } from "../../api/userApi";

const ProfileImageUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    try {
      setLoading(true);
      setErrorMsg("");

      const response = await uploadProfileImage(file);

      // Pass uploaded image URL back to parent state if needed
      if (onUpload) {
        onUpload(response.imageUrl || response.user?.profileImage);
      }

    } catch (error) {
      setErrorMsg(error.response?.data?.message || "Image upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex flex-col items-start gap-2">
      {errorMsg && <p className="text-red-500 text-xs font-semibold">{errorMsg}</p>}

      <div className="flex items-center gap-2">
        <input
          type="file"
          accept="image/*"
          className="px-2 py-1 border rounded text-sm"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-4 py-2 rounded text-sm transition-colors"
        >
          {loading ? "Uploading..." : "Upload Image"}
        </button>
      </div>
    </form>
  );
};

export default ProfileImageUpload;