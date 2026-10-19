import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiBarChart2, FiCheckSquare, FiChevronsLeft, FiChevronsRight, FiLogOut, FiUser, FiX } from "react-icons/fi";
import { getProfile } from "../../api/userApi";

const navigation = [
  { label: "Dashboard", to: "/dashboard", icon: FiBarChart2 },
  { label: "Tasks", to: "/tasks", icon: FiCheckSquare },
  { label: "Profile", to: "/profile", icon: FiUser },
];

const Sidebar = ({ collapsed, onToggle, mobileOpen, onClose }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setUser(response.user);
      } catch (error) {
        console.error("Unable to load profile for sidebar", error);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={onClose}
          className="fixed inset-0 z-30 bg-slate-950/40 xl:hidden"
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex flex-col bg-slate-950 text-slate-100 shadow-xl transition-[width,transform] duration-200 ${
          collapsed ? "xl:w-20" : "xl:w-64"
        } w-64 ${mobileOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"}`}
      >
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
          <div className={`flex items-center gap-3 ${collapsed ? "xl:justify-center" : ""}`}>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-500 text-lg font-bold text-white">T</span>
            <span className={`${collapsed ? "xl:hidden" : ""} text-lg font-bold tracking-tight`}>TaskFlow</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white xl:hidden"
          >
            <FiX size={18} />
          </button>
          <button
            type="button"
            onClick={onToggle}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-expanded={!collapsed}
            className="hidden rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white xl:block"
          >
            {collapsed ? <FiChevronsRight size={17} /> : <FiChevronsLeft size={17} />}
          </button>
        </div>

        {user && (
          <div className={`mx-3 mt-5 flex items-center gap-3 rounded-xl bg-white/5 p-3 ${collapsed ? "xl:justify-center xl:px-1" : ""}`}>
            <img
              src={user.profileImage ? `${import.meta.env.VITE_API_URL}${user.profileImage}` : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || "User")}&background=7c3aed&color=fff`}
              alt=""
              className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-white/10"
            />
            <div className={`${collapsed ? "xl:hidden" : ""} min-w-0`}>
              <p className="truncate text-sm font-semibold">{user.name}</p>
              <p className="truncate text-xs text-slate-400">{user.email}</p>
            </div>
          </div>
        )}

        <nav className="mt-7 flex-1 px-3" aria-label="Main navigation">
          <p className={`mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 ${collapsed ? "xl:hidden" : ""}`}>Workspace</p>
          <div className="space-y-1">
            {navigation.map(({ label, to, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={onClose}
                title={collapsed ? label : undefined}
                className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                  isActive ? "bg-violet-500 text-white shadow-lg shadow-violet-950/30" : "text-slate-400 hover:bg-white/5 hover:text-white"
                } ${collapsed ? "xl:justify-center xl:px-0" : ""}`}
              >
                <Icon size={18} className="shrink-0" />
                <span className={collapsed ? "xl:hidden" : ""}>{label}</span>
              </NavLink>
            ))}
          </div>
        </nav>

        <div className="border-t border-white/10 p-3">
          <button
            type="button"
            onClick={handleLogout}
            title={collapsed ? "Logout" : undefined}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-400 transition hover:bg-rose-500/10 hover:text-rose-300 ${collapsed ? "xl:justify-center xl:px-0" : ""}`}
          >
            <FiLogOut size={18} className="shrink-0" />
            <span className={collapsed ? "xl:hidden" : ""}>Log out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
