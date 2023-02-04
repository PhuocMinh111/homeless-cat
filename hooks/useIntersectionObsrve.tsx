import React, { useEffect, useState } from "react";

const useIntersectionObserver = (
  entries: string,
  root: string,
  threshold: number = 0
) => {
  const [obj, setObj] = useState<Array<IntersectionObserverEntry>>();

  useEffect(() => {
    if (typeof window !== undefined) {
      const option = {
        root: document.getElementById(root),
        rootMargin: "0px",
        threshold: threshold,
      };

      const handler = (entries, observer) => {
        setObj(entries);
      };
      const observer = new IntersectionObserver(handler, option);
      const target = document.getElementById(entries);
      if (target) {
        observer.observe(target);
      }
    }
  });
  return obj;
};

export default useIntersectionObserver;
