import { useEffect, useState } from "react";
import { FiLock, FiUser } from "react-icons/fi";
import toast from "react-hot-toast";
import ChangePasswordForm from "../../components/profile/ChangePasswordForm";
import ProfileForm from "../../components/profile/ProfileForm";
import ProfileImageUpload from "../../components/profile/ProfileImageUpload";
import {
  changePassword,
  getProfile,
  updateProfile,
} from "../../api/userApi";
import MainLayout from "../../layouts/MainLayout";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await getProfile();
        setUser(response.user);
      } catch (error) {
        console.error("Unable to load profile", error);
        toast.error(error.response?.data?.message || "Unable to load your profile");
      }
    };

    loadProfile();
  }, []);

  const refreshProfile = async () => {
    try {
      const response = await getProfile();
      setUser(response.user);
    } catch (error) {
      console.error("Unable to refresh profile", error);
      toast.error(error.response?.data?.message || "Unable to refresh your profile");
    }
  };

  const handleSave = async (data) => {
    try {
      const response = await updateProfile(data);
      toast.success(response.message || "Profile updated successfully");
      await refreshProfile();
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    }
  };

  const handleChangePassword = async (data) => {
    try {
      const response = await changePassword(data);
      toast.success(response.message || "Password updated successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Password update failed");
    }
  };

  const handleImageUpload = () => {
    setAvatarError(false);
    toast.success("Profile image uploaded");
    refreshProfile();
  };

  if (!user) {
    return (
      <MainLayout>
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-violet-600">Account</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">My profile</h1>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 text-sm text-slate-500 shadow-sm">
            Loading your profile…
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <p className="mb-1 text-sm font-semibold uppercase tracking-[0.16em] text-violet-600">Account settings</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">My profile</h1>
          <p className="mt-1 text-sm text-slate-500">Manage your personal information and account security.</p>
        </div>

        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(250px,0.8fr)_minmax(0,1.7fr)]">
          <aside className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="h-28 bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-500" />
            <div className="-mt-12 px-6 pb-6">
              {user.profileImage && !avatarError ? (
                <img
                  src={`${import.meta.env.VITE_API_URL}${user.profileImage}`}
                  alt={`${user.name || "User"}'s profile`}
                  className="h-24 w-24 rounded-2xl border-4 border-white bg-white object-cover shadow-md"
                  onError={() => setAvatarError(true)}
                />
              ) : (
                <div aria-label={`${user.name || "User"}'s profile`} className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-violet-100 text-3xl font-bold text-violet-700 shadow-md">
                  {(user.name || "U").trim().charAt(0).toUpperCase()}
                </div>
              )}
              <h2 className="mt-4 text-xl font-bold text-slate-900">{user.name}</h2>
              <p className="mt-1 break-all text-sm text-slate-500">{user.email}</p>
              <div className="my-5 h-px bg-slate-100" />
              <ProfileImageUpload onUpload={handleImageUpload} />
            </div>
          </aside>

          <div className="space-y-5">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-6 flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <FiUser size={19} />
                </span>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Personal information</h2>
                  <p className="mt-1 text-sm text-slate-500">Keep your account details up to date.</p>
                </div>
              </div>
              <ProfileForm user={user} onSave={handleSave} />
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-6 flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <FiLock size={19} />
                </span>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Password & security</h2>
                  <p className="mt-1 text-sm text-slate-500">Choose a strong password to help protect your account.</p>
                </div>
              </div>
              <ChangePasswordForm onChangePassword={handleChangePassword} />
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
