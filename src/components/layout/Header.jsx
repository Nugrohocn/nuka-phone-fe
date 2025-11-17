import React from "react";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
  const location = useLocation();

  const { user } = useSelector((state) => state.auth);

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const currentPage = pathSegments[pathSegments.length - 1] || "dashboard";

  const pageTitles = {
    dashboard: "Dashboard Overview",
    phone: "Manage Phone",
    analytics: "Analytics Overview",
    settings: "Settings",
  };

  const formatTitle = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const pageTitle = pageTitles[currentPage] || formatTitle(currentPage);

  return (
    <div className="flex h-20 items-center justify-between border-b border-slate-300 px-6">
      <div>
        <h1 className="text-xl font-bold">{pageTitle}</h1>
        <p className="text-md text-gray-600">
          Welcome back! Here’s what’s happening with your business today.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <img
          src="https://placehold.co/40x40"
          alt="profile"
          className="h-10 w-10 rounded-full"
        />
        <div>
          {}
          <h3 className="text-sm font-semibold text-gray-800">
            {user?.full_name || "Username"}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
