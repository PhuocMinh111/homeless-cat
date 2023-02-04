import React, { useEffect, useState } from "react";

const useCalcDiv = (id: string) => {
  const [size, setSize] = useState({ h: 0, w: 0 });

  useEffect(() => {
    if (typeof window !== undefined) {
      const div = window.document.getElementById(id);
      if (div) {
        const { clientWidth: w, clientHeight: h } = div;
        setSize({ w: w, h: h });
      }
    }
  }, []);

  return size;
};

export default useCalcDiv;
