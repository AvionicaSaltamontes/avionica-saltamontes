"use client";
import { useState, useRef, useEffect } from "react";

const useElementOnScreen = (options, enabled = true) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
      observer.disconnect();
    };
  }, [options, enabled]);

  return [targetRef, isIntersecting];
};

export default useElementOnScreen;
