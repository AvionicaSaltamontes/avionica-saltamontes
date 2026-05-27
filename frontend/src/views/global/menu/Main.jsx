"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import Image from "next/image";

import SwitchLocale from "@/components/switch-locale/Main";
import SlideOver from "@/components/slide-over/Main";
import Container from "@/components/container/Main";
import T from "@/components/texts/Main";

import Logo from "./Logo";

import { cn } from "@/lib/cn";
import { useMainContext } from "@/context/Main";

const Menu = ({ open, setOpen }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleMove = (id) => {
    setOpen(false);
    if (pathname === "/") {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");

      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <ul className="flex items-center justify-center h-[80%] gap-10 lg:gap-20 flex-col lg:flex-row">
      <li className="block lg:hidden -mt-44 bg-red-500 h-28">
        <Image alt="" src="/images/saltamontes_animation.webp" width={672} height={356} className="w-full" />
      </li>
      <li className="uppercase">
        <button type="button" onClick={() => handleMove("gallery")} className="cursor-pointer font-calibri-regular text-xl md:text-base uppercase">
          <T value="label_aircraft" />
        </button>
      </li>
      <li className="uppercase">
        <button type="button" onClick={() => handleMove("about")} className="cursor-pointer font-calibri-regular text-xl md:text-base uppercase">
          <T value="label_about_us" />
        </button>
      </li>
      <li>
        <button
          onClick={() => handleMove("contact")}
          type="button"
          className="h-10 md:h-9 bg-c_golden rounded-full uppercase text-white cursor-pointer font-calibri-bold text-xl md:text-base px-10 md:px-7"
        >
          <T value="label_contact" />
        </button>
      </li>
      <li className="hidden lg:block">
        <SwitchLocale />
      </li>
    </ul>
  );
};

const Hamburger = ({ setOpen, open }) => {
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="w-9 h-9 cursor-pointer flex items-center justify-center text-white ring-2 rounded"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="transition-all duration-300 ease-in-out">
        <g
          className={`transition-transform duration-300 ease-in-out ${open ? "rotate-45" : ""}`}
          style={{
            transformOrigin: "center",
            transformBox: "fill-box",
          }}
        >
          <line
            x1="4"
            y1="8"
            x2="20"
            y2="8"
            stroke="currentColor"
            strokeWidth={2}
            className={`transition-all duration-300 ease-in-out ${open ? "translate-y-1" : ""}`}
          />
          <line
            x1="4"
            y1="16"
            x2="20"
            y2="16"
            stroke="currentColor"
            strokeWidth={2}
            className={`transition-all duration-300 ease-in-out ${open ? "-translate-y-1 -rotate-90" : ""}`}
            style={{
              transformOrigin: "center",
              transformBox: "fill-box",
            }}
          />
        </g>
      </svg>
    </button>
  );
};

const Main = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const { backgroundLoaded, setBackgroundLoaded } = useMainContext();

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setBackgroundLoaded(true);
    }
  }, [pathname]);

  return (
    <nav>
      <SlideOver open={open} onClose={() => setOpen(false)}>
        <Menu open={open} setOpen={setOpen} />
      </SlideOver>
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-40 -translate-y-full transition-transform duration-2000 delay-100 shadow",
          backgroundLoaded && "translate-y-0",
        )}
      >
        <div
          className={cn(
            "w-full h-full transition-colors duration-300",
            pathname === "/" ? "text-white bg-c_dark_blue/40" : "bg-white",
            show && "bg-white text-c_midnight_blue",
          )}
        >
          <Container>
            <div className="flex items-center justify-between">
              <Logo />

              <div className="flex items-center gap-2">
                <div className="block lg:hidden">
                  <SwitchLocale />
                </div>
                <div className="mix-blend-difference block lg:hidden">
                  <Hamburger setOpen={setOpen} open={open} />
                </div>
              </div>

              <div className="hidden lg:block">
                <Menu open={open} setOpen={setOpen} />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </nav>
  );
};

export default Main;
