import { useState } from "react";
import toast from "react-hot-toast";

const ChangePasswordForm = ({ onChangePassword }) => {

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.newPassword !==
      formData.confirmPassword
    ) {
      return toast.error(
        "Passwords do not match"
      );
    }

    onChangePassword({
      currentPassword:
        formData.currentPassword,
      newPassword:
        formData.newPassword,
    });

    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 mt-8"
    >
      <h2 className="text-2xl font-bold">
        Change Password
      </h2>

      <div>
        <label htmlFor="current-password" className="mb-1.5 block text-sm font-semibold text-slate-700">Current password</label>
        <input
          id="current-password"
          type="password"
          name="currentPassword"
          placeholder="Enter current password"
          value={formData.currentPassword}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-300 bg-white p-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label htmlFor="new-password" className="mb-1.5 block text-sm font-semibold text-slate-700">New password</label>
        <input
          id="new-password"
          type="password"
          name="newPassword"
          placeholder="Enter new password"
          value={formData.newPassword}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-300 bg-white p-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label htmlFor="confirm-password" className="mb-1.5 block text-sm font-semibold text-slate-700">Confirm new password</label>
        <input
          id="confirm-password"
          type="password"
          name="confirmPassword"
          placeholder="Re-enter new password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-300 bg-white p-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Change Password
      </button>

    </form>
  );
};

export default ChangePasswordForm;