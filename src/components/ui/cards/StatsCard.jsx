import { ArrowUp } from "lucide-react";
import { Smartphone } from "lucide-react";
import React from "react";

const iconStyles = {
  stock: {
    bg: "bg-[#d8e6fe]",
    color: "text-[#0128B7]",
  },
  sold: {
    bg: "bg-[#dbfbe2]",
    color: "text-green-600",
  },
  profit: {
    bg: "bg-sky-200",
    color: "text-sky-600",
  },
  avg: {
    bg: "bg-rose-200",
    color: "text-rose-600",
  },
};

const Card = ({ title, value, change, icon, variant = "stock" }) => {
  const { bg, color } = iconStyles[variant] || iconStyles.stock;
  return (
    <>
      <div className="flex w-60 items-center justify-between rounded-lg border border-slate-300 p-4">
        <div className="space-y-2">
          <h3 className="text-xs font-semibold">{title}</h3>
          <h1 className="text-4xl font-bold">{value}</h1>
          <span className="flex items-center justify-center text-xs text-green-600">
            <ArrowUp size={14} />
            {change}
          </span>
        </div>
        <div className={`${bg} rounded-lg p-3`}>
          <div className={`${color}`}>{icon}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
