import { Package2, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-nuka.png";
import navigation from "../../data/Navigation";

// --- 1. Impor hook Redux, Perintah Logout, dan ApiService ---
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../../store/authSlice";
import { ApiService } from "../../api/apiService";

const Sidebar = () => {
  // --- 2. Siapkan hook dan ambil data user dari Redux ---
  const dispatch = useDispatch();
  // Ambil 'user' dari state.auth di Redux
  const { user } = useSelector((state) => state.auth);

  // --- 3. Ini dia fungsi Logout Anda ---
  const handleLogout = async () => {
    try {
      // Beri tahu Supabase untuk sign out
      await ApiService.logout();

      // Beri tahu Redux untuk clear state
      dispatch(authLogout());

      // Anda TIDAK perlu 'navigate'.
      // DashboardLayout akan otomatis redirect ke /login
      // karena 'isAuthenticated' sekarang false.
    } catch (error) {
      console.error("Gagal logout:", error);
      // (Opsional) Tetap paksa logout di Redux walau API gagal
      dispatch(authLogout());
    }
  };

  return (
    <aside className="flex h-screen w-64 flex-col justify-between shadow-2xl">
      {/* Header + Navigation  */}
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
            src="https://placehold.co/40x40" // Nanti bisa ganti dengan foto profil
            alt="profile"
            className="h-10 w-10 rounded-full"
          />
          <div>
            {/* --- 4. Tampilkan data user dari Redux --- */}
            <h3 className="text-sm font-semibold text-gray-800">
              {user?.full_name || "Nama User"}
            </h3>
            <p className="text-xs text-gray-500">
              {user?.role === "superadmin" ? "Super Admin" : "Admin"}
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout} // <-- Tombol Anda sekarang sudah berfungsi
          className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-red-500"
        >
          <LogOut size={18} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
