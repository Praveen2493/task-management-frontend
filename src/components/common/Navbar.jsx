import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiMenu } from "react-icons/fi";
import { getProfile } from "../../api/userApi";

const Navbar = ({ onMenuClick }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setUser(response.user);
      } catch (error) {
        console.error("Unable to load profile for navigation bar", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open navigation menu"
          className="rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 xl:hidden"
        >
          <FiMenu size={21} />
        </button>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
        >
          <FiArrowLeft size={17} />
          <span className="hidden sm:inline">Back</span>
        </button>
      </div>
      {user && (
        <div className="flex min-w-0 items-center gap-3">
          <img
            src={user.profileImage ? `${import.meta.env.VITE_API_URL}${user.profileImage}` : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || "User")}&background=7c3aed&color=fff`}
            alt=""
            className="h-9 w-9 rounded-full object-cover ring-2 ring-violet-100"
          />
          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-sm font-semibold text-slate-800">{user.name}</p>
            <p className="truncate text-xs text-slate-500">{user.email}</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
