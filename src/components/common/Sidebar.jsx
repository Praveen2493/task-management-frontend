import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getProfile } from '../../api/userApi';

const Sidebar = () => {

     const navigate = useNavigate();
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

const handleLogout = () => {

  // Remove JWT Token
  localStorage.removeItem("token");

  // Remove user data if stored
  localStorage.removeItem("user");

  // Go to login page
  navigate("/login");

};

  return (
    <div className='w-64 hidden md:block bg-slate-600 text-white h-screen p-6 '>
        <h2 className="text-2xl font-bold mb-8">Menu</h2>

        {user && (
            <div className="flex flex-col items-center py-6">

              <img
                src={
                      user.profileImage
                        ? `${import.meta.env.VITE_API_URL}${user.profileImage}`
                        : "https://ui-avatars.com/api/?name=User&background=random"
                    }
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border-2 border-white"
              />

              <h3 className="mt-3 font-bold text-white">
                {user.name}
              </h3>

              <p className="text-sm text-gray-300">
                {user.email}
              </p>

            </div>
          )}

        <ul className='space-y-4'>
            <li>
              <Link to='/dashboard' className='block hover:text-blue-600 mb-3'>DashBoard </Link>
              <Link to='/tasks' className='block hover:text-blue-600 mb-3'> Tasks </Link>
              {/* <Link to='/create-task' className='block hover:text-blue-600 mb-3'> Create Task</Link> */}
               {/* <Link to="/notifications" className='block hover:text-blue-600 mb-3'>Notifications</Link> */}
                {/* <Link to="/settings" className='block hover:text-blue-600 mb-3'>Settings</Link> */}
                <Link to="/profile" className="block hover:text-blue-600 mb-3">Profile</Link>
            </li>
        </ul>

        <button
        onClick={handleLogout}
        className="mt-8 bg-red-600 px-4 py-2 rounded-lg w-full cursor-pointer"
      >
        Logout
      </button>
    </div>
  )
}

export default Sidebar;
