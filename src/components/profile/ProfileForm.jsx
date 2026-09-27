import { useState } from "react";

const ProfileForm = ({ user, onSave }) => {

  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label htmlFor="profile-name" className="mb-1.5 block text-sm font-semibold text-slate-700">
          Name
        </label>

        <input
          id="profile-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded w-full p-2"
        />
      </div>

      <div>
        <label htmlFor="profile-email" className="mb-1.5 block text-sm font-semibold text-slate-700">
          Email
        </label>

        <input
          id="profile-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded w-full p-2"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Update Profile
      </button>

    </form>
  );
};

export default ProfileForm;