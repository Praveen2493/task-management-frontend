import { useEffect, useState } from "react";
import { getProfile } from "../../api/userApi";

const Navbar = () => {

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

  return (
    <div className="flex justify-end items-center bg-white shadow px-6 py-3">

      {user && (
        <div className="flex items-center gap-3">

          <img
            src={
              user.profileImage
                ? `http://localhost:5000${user.profileImage}`
                : "https://via.placeholder.com/40"
            }
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>
            <p className="font-semibold">
              {user.name}
            </p>

            <p className="text-sm text-gray-500">
              {user.email}
            </p>
          </div>

        </div>
      )}

    </div>
  );
};

export default Navbar;