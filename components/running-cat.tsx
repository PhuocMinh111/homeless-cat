import React, { forwardRef, useEffect } from "react";
import Image from "next/image";
import nyan from "../public/nyan.gif";
import useCalcDiv from "@/hooks/useCalcDiv";

const RunningCat = (props: any) => {
  const { w, h } = useCalcDiv("running-cat-rail");

  useEffect(() => {}, []);

  return (
    <div>
      <Image
        className="bg-size object-cover"
        alt="running cat"
        src={nyan}
        width={100}
        height={50}
      />
    </div>
  );
};

export default RunningCat;
