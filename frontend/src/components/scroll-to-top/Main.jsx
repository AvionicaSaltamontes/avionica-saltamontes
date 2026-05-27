"use client";
import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function ScrollTop() {
  const pathname = usePathname();

  useLenis(() => {});

  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 0.8,
      ease: "power2.out",
    });
  };

  useLayoutEffect(() => {
    scrollToTop();
  }, []);

  useLayoutEffect(() => {
    scrollToTop();
  }, [pathname]);

  return null;
}
