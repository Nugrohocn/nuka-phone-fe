import React from "react";

const ActivityCard = ({ title, id, product, information, price }) => {
  return (
    <>
      <div className="w-full space-y-6 rounded-lg border border-slate-300 p-4">
        <div className="flex justify-between">
          <h3 className="text-md font-bold">{title}</h3>
          <p className="text-xs">View All </p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center justify-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 p-3 text-white">
              {id}
            </span>
            <div>
              <h3 className="text-md font-semibold">{product}</h3>
              <p className="text-sm">{information}</p>
            </div>
          </div>
          <div>{price}</div>
        </div>
      </div>
    </>
  );
};

export default ActivityCard;
