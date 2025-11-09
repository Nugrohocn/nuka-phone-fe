import React from "react";

const Header = () => {
  return (
    <div className="flex h-20 items-center justify-between border-b border-slate-300 px-6">
      <div>
        <h1 className="text-xl font-bold">Dashboard Overview</h1>
        <p className="text-md">
          Welcome back! Here' what's happening with your bussiness today{" "}
        </p>
      </div>
      <div>
        <div className="flex items-center gap-3">
          <img
            src="https://placehold.co/40x40"
            alt="profile"
            className="h-10 w-10 rounded-full"
          />
          <div>
            <h3 className="text-sm font-semibold text-gray-800">Nugroho</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
