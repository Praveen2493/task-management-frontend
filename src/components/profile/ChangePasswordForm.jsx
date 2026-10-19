import { useState } from "react";
import toast from "react-hot-toast";

const inputClassName = "mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100";

const ChangePasswordForm = ({ onChangePassword }) => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    onChangePassword({
      currentPassword: formData.currentPassword,
      newPassword: formData.newPassword,
    });
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor="current-password" className="block text-sm font-semibold text-slate-700">Current password</label>
        <input
          id="current-password"
          type="password"
          name="currentPassword"
          autoComplete="current-password"
          placeholder="Enter your current password"
          value={formData.currentPassword}
          onChange={handleChange}
          required
          className={inputClassName}
        />
      </div>
      <div>
        <label htmlFor="new-password" className="block text-sm font-semibold text-slate-700">New password</label>
        <input
          id="new-password"
          type="password"
          name="newPassword"
          autoComplete="new-password"
          placeholder="Enter a new password"
          value={formData.newPassword}
          onChange={handleChange}
          required
          minLength={6}
          className={inputClassName}
        />
      </div>
      <div>
        <label htmlFor="confirm-password" className="block text-sm font-semibold text-slate-700">Confirm new password</label>
        <input
          id="confirm-password"
          type="password"
          name="confirmPassword"
          autoComplete="new-password"
          placeholder="Re-enter new password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          minLength={6}
          className={inputClassName}
        />
      </div>
      <div className="sm:col-span-2 sm:flex sm:justify-end">
        <button
          type="submit"
          className="w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700 sm:w-auto"
        >
          Update password
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
