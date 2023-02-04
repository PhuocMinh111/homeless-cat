import React from "react";

export const RunningCatRail = ({ children }) => {
  return (
    <div
      id="running-cat-rail"
      className="relative top-1/2 left-1/2 
  -translate-x-1/2 -translate-y-1/2 bg-red-500 h-[50px] w-full
  "
    >
      {children}
    </div>
  );
};
