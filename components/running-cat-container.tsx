import React, { useRef } from "react";
import RunningCat from "./running-cat";
import { RunningCatRail } from "./running-cat-rail";

const RunningCatContainer = ({ children }: any) => {
  const catRef = useRef(null);
  const railRef = useRef(null);

  return (
    <div
      className="bg-blue-500
    fixed -z-10 top-0 left-0 w-full h-full 
    "
    >
      <RunningCatRail ref={railRef}>
        <RunningCat ref={catRef} parentRef={railRef} />
      </RunningCatRail>
    </div>
  );
};

export default RunningCatContainer;
