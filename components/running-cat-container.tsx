import React, { useEffect, useRef, useState } from "react";
import RunningCat from "./running-cat";
import { motion } from "framer-motion";
import Image from "next/image";
import nyan from "../public/nyan.gif";
import useIntersectionObserver from "@/hooks/useIntersectionObsrve";
import useViewPort from "@/hooks/useViewPort";
import { flip, flip } from "./utils/utils";

const RunningCatContainer = () => {
  const railRef = useRef(null);
  const containerRef = useRef(null);
  const isFlip = flip();
  // respawn
  const [spawn, setSpawn] = useState(true);
  const onFinish = () => {
    setSpawn(false);
    setTimeout(() => {
      setSpawn(true);
    }, 500);
  };
  //--------

  function capture() {
    setSpawn(false);
    setTimeout(() => {
      setSpawn(true);
    }, 500);
  }

  return (
    <div
      ref={containerRef}
      style={{ transform: `rotateY(${isFlip ? "180deg" : "0deg"})` }}
      className="bg-blue-500
    fixed -z-10 top-0 left-0 w-full h-full 
    "
    >
      {spawn && <RunningCat onClick={capture} onFinish={onFinish} />}
    </div>
  );
};

export default RunningCatContainer;
