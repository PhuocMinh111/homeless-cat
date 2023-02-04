import React, {
  ReactNode,
  ReactComponentElement,
  ReactElement,
  Ref,
  useEffect,
  useState,
} from "react";

const useIntersectionObserver = (
  entries: any,
  root: any,
  threshold: number = 0
) => {
  const [obj, setObj] = useState<Array<IntersectionObserverEntry>>();

  useEffect(() => {
    if (typeof window !== undefined) {
      const option = {
        root: root.current,
        rootMargin: "0px",
        threshold: threshold,
      };

      const handler = (entries, observer) => {
        setObj(entries);
      };
      const observer = new IntersectionObserver(handler, option);
      const target = entries.current;
      if (target) {
        observer.observe(target);
      }
    }
  }, [entries, root, threshold]);
  return obj;
};

export default useIntersectionObserver;
