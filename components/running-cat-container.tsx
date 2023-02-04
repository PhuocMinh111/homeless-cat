import React, { useEffect, useRef } from "react";
import RunningCat from "./running-cat";
import { motion } from "framer-motion";
import Image from "next/image";
import nyan from "../public/nyan.gif";
import useIntersectionObserver from "@/hooks/useIntersectionObsrve";
import useViewPort from "@/hooks/useViewPort";

const RunningCatContainer = () => {
  const { w, h } = useViewPort();

  const catRef = useRef(null);
  const railRef = useRef(null);
  const containerRef = useRef(null);
  const obj = useIntersectionObserver(railRef, containerRef);
  console.log(obj);
  useEffect(() => {}, []);
  return (
    <div
      ref={containerRef}
      className="bg-blue-500
    fixed -z-10 top-0 left-0 w-full h-full 
    "
    >
      <RunningCat w={w / 2} h={h / 2} />
    </div>
  );
};

export default RunningCatContainer;
