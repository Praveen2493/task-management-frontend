import { useState } from "react";
import { FiImage, FiUploadCloud } from "react-icons/fi";
import { uploadProfileImage } from "../../api/userApi";

const ProfileImageUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    if (!file) {
      setErrorMsg("Choose an image before uploading.");
      return;
    }

    try {
      setLoading(true);
      setErrorMsg("");
      const response = await uploadProfileImage(file);
      onUpload?.(response.imageUrl || response.user?.profileImage);
      setFile(null);
      formElement.reset();
    } catch (error) {
      setErrorMsg(error.response?.data?.message || "Image upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <p className="text-sm font-semibold text-slate-800">Profile photo</p>
        <p className="mt-1 text-xs leading-5 text-slate-500">Use a clear photo so your teammates can recognize you.</p>
      </div>
      <label
        htmlFor="profile-image"
        className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-3 transition hover:border-violet-300 hover:bg-violet-50/50"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-violet-600 shadow-sm">
          <FiImage size={17} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-xs font-semibold text-slate-700">{file?.name || "Choose an image"}</span>
          <span className="mt-0.5 block text-[11px] text-slate-400">JPG, PNG or GIF</span>
        </span>
        <input
          id="profile-image"
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={(event) => {
            setFile(event.target.files?.[0] || null);
            setErrorMsg("");
          }}
        />
      </label>
      {errorMsg && <p role="alert" className="text-xs font-medium text-rose-600">{errorMsg}</p>}
      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <FiUploadCloud size={16} />
        {loading ? "Uploading…" : "Upload photo"}
      </button>
    </form>
  );
};

export default ProfileImageUpload;
