import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import ProfileForm from "../../components/profile/ProfileForm";
import {
  getProfile,
  updateProfile,
  changePassword,
  uploadProfileImage,
} from "../../api/userApi";
import toast from "react-hot-toast";
import ChangePasswordForm from "../../components/profile/ChangePasswordForm";
import ProfileImageUpload from "../../components/profile/ProfileImageUpload";

const Profile = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {

      const response = await getProfile();

      setUser(response.user);

    } catch (error) {

      console.log(error);

    }
  };

  const handleSave = async (data) => {
    try {

      const response = await updateProfile(data);

      toast.success(response.message);

      fetchProfile();

    } catch (error) {

      toast.error(error.response?.data?.message || "Update failed");

    }
  };



  const handleChangePassword = async (data) => {
  try {
    const response = await changePassword(data);

    toast.success(response.message);

  } catch (error) {
    toast.error(
      error.response?.data?.message ||
      "Password update failed"
    );
  }
};


const handleImageUpload = async (file) => {

  try {

    const response =
      await uploadProfileImage(file);

    toast.success(response.message);

    fetchProfile();

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Image upload failed"
    );

  }

};



  if (!user) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>

      <div className="max-w-xl mx-auto bg-white shadow rounded-lg p-6">

        <h1 className="text-3xl font-bold mb-6">
          My Profile
        </h1>

        <div className="flex flex-col items-center mb-6">
          <img
            src={
              user.profileImage
                ? `${import.meta.env.VITE_API_URL}${user.profileImage}`
                : "https://ui-avatars.com/api/?name=User&background=random"
            }
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border"
            onError={(e) => {
              e.target.src =
                "https://ui-avatars.com/api/?name=User&background=random";
            }}
          />

        </div>

         <ProfileImageUpload
    onUpload={handleImageUpload}
  />

        <ProfileForm
          user={user}
          onSave={handleSave}
        />

        <hr className="my-8" />

          <ChangePasswordForm
            onChangePassword={handleChangePassword}
          />

      </div>

    </MainLayout>
  );
};

export default Profile;