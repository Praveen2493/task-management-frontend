import { useState } from "react";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((current) => !current)}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
      <div className={`min-h-screen transition-[margin] duration-200 ${collapsed ? "xl:ml-20" : "xl:ml-64"}`}>
        <Navbar onMenuClick={() => setMobileOpen(true)} />
        <main className="mx-auto max-w-[1600px] p-4 sm:p-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
