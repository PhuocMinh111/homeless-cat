import React, { useEffect, useState } from "react";

const useCalcDiv = (div: any) => {
  const [size, setSize] = useState({ h: 0, w: 0 });

  useEffect(() => {
    if (typeof window !== undefined) {
      if (div) {
        const { clientWidth: w, clientHeight: h } = div;
        setSize({ w: w, h: h });
      }
    }
  }, []);

  return size;
};

export default useCalcDiv;
