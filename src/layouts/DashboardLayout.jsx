import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      {}
      <main className="flex flex-1 flex-col">
        <Header />
        <div className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
