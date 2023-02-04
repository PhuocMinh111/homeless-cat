import React, { forwardRef, useEffect } from "react";
import Image from "next/image";
import nyan from "../public/nyan.gif";
import useCalcDiv from "@/hooks/useCalcDiv";
import { motion } from "framer-motion";
import { calculateMove } from "./utils/utils";
const RunningCat = ({ w, h }: { w: number; h: number }) => {
  return (
    <motion.div
      //   initial={"begin"}
      //   animate={"end"}
      //   transition={{ duration: 3 }}
      //   variants={calculateMove(w, h)}
      id="running-cat-rail"
      className="relative top-1/2 left-1/2 rotate-90 origin-center
-translate-x-1/2 -translate-y-1/2 bg-red-500 h-[50px] w-[100px]
"
    >
      {/* runningCat */}
      <div>
        <Image
          className="bg-size object-cover"
          alt="running cat"
          src={nyan}
          width={100}
          height={50}
        />
      </div>
    </motion.div>
  );
};

export default RunningCat;
