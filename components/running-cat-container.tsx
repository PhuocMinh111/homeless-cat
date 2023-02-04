import React from "react";

const RunningCatContainer = ({ children }: any) => {
  return (
    <div
      className="bg-blue-500
    fixed -z-10 top-0 left-0 w-full h-full 
    "
    >
      {children}
    </div>
  );
};

export default RunningCatContainer;
