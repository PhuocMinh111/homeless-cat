import React, { forwardRef } from "react";

const RunningCatRail = forwardRef((props: any, ref: any) => {
  return (
    <div
      id="running-cat-rail"
      className="relative top-1/2 left-1/2 
  -translate-x-1/2 -translate-y-1/2 bg-red-500 h-[50px] w-full
  "
    >
      {props.children}
    </div>
  );
});
RunningCatRail.displayName = "RunningCatRail";

export default RunningCatRail;
