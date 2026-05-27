"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Close = ({ onClose = () => {} }) => {
  return (
    <div className="px-2 sm:px-6 py-4 flex justify-end">
      <button
        aria-label="Close"
        type="button"
        className="w-10 h-10 bg-c_kimchi text-black flex items-center justify-center cursor-pointer"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-x"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

const Main = ({ open = false, onClose = () => {}, children }) => {
  const [mounted, setMounted] = useState(false);

  const keys = { 37: 1, 38: 1, 39: 1, 40: 1 }; // keys of arrow of the keyboard

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const preventDefaultForScrollKeys = (e) => {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  };

  useEffect(() => {
    if (open) {
      window.addEventListener("wheel", preventDefault, { passive: false });
      window.addEventListener("onwheel", preventDefault, { passive: false });
      window.addEventListener("mousewheel", preventDefault, { passive: false });
      window.addEventListener("keydown", preventDefaultForScrollKeys, { passive: false });

      document.body.setAttribute("data-lenis-prevent", "true");
    } else {
      document.body.removeAttribute("data-lenis-prevent");
    }

    return () => {
      window.removeEventListener("wheel", preventDefault, { passive: false });
      window.removeEventListener("onwheel", preventDefault, { passive: false });
      window.removeEventListener("mousewheel", preventDefault, { passive: false });
      window.removeEventListener("keydown", preventDefaultForScrollKeys, { passive: false });
    };
  }, [open]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div>
      {/* BACKGROUND */}
      <div
        onClick={onClose}
        className={`fixed z-50 cursor-pointer inset-0 bg-black/20 backdrop-blur-[3px] bg-opacity-75 w-screen h-screen ${!open && "hidden"}`}
      />

      {/* BODY */}
      <div
        className={`fixed top-0 right-0 z-[999] transition ease-in duration-300 h-full w-full ${!open ? "translate-x-full" : "-translate-x-0"}`}
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
        aria-label="slide over"
      >
        <div className="fixed inset-0 overflow-hidden h-full">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <div className="pointer-events-auto relative w-screen max-w-md">
                <div className="flex h-lvh flex-col overflow-hidden bg-white shadow-xl">
                  <Close onClose={onClose} />
                  <div className="relative mt-6 flex-1 px-4 sm:px-6 ">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Main;
