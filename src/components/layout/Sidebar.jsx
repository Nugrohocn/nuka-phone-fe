import { Package2, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-nuka.png";
import navigation from "../../data/Navigation";

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-64 flex-col justify-between shadow-2xl">
      {/* Header + Navigation  */}
      <div className="mt-12">
        <div className="flex h-16 items-center gap-3 px-6">
          <div className="p-4">
            <img src={logo} alt="logo-nuka" className="h-45 w-auto" />
          </div>
        </div>

        <nav className="mt-16 flex flex-col gap-2 px-4">
          {navigation.map((nav, index) => (
            <Link
              key={index}
              to={nav.href}
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-100 hover:border-r hover:border-indigo-800 hover:bg-[#EFF6FF] hover:text-indigo-600"
            >
              {nav.icon}
              {nav.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* Profile + Logout */}
      <div className="mb-4 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <img
            src="https://placehold.co/40x40"
            alt="profile"
            className="h-10 w-10 rounded-full"
          />
          <div>
            <h3 className="text-sm font-semibold text-gray-800">Nugroho</h3>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>

        <button className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-red-500">
          <LogOut size={18} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
