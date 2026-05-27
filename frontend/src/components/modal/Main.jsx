"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import { cn } from "@/lib/cn";

const Main = ({ open = false, setOpen = () => {}, children = null, className = "" }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
      <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/50 cursor-pointer" />
      <div className={cn("rounded-lg mx-2 p-4 md:p-6 max-w-md md:max-w-6xl w-full relative bg-white shadow-lg animate-intro_y", className)}>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Main;
