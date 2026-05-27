"use client";
import { useEffect, useRef, useState } from "react";

import { Calendar } from "react-date-range";
import { enUS, es } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "@/app/calendarTheme.css";

import T from "@/components/texts/Main";

const Main = ({ label = "", date, setDate }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const lang = localStorage.getItem("lang-avionica") || "en";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={containerRef} className="w-full">
      <label className="text-sm absolute top-0 -translate-y-1/2 left-3 bg-white px-0.5 pointer-events-none font-calibri-regular">
        <T value={label} />
      </label>
      <div onClick={() => setOpen(true)} className="w-full h-10 border border-c_golden rounded px-3 font-calibri-regular cursor-pointer relative">
        <p className="font-calibri-regular mt-2">
          {date.toLocaleDateString(lang === "en" ? "en-US" : "es-MX", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        {open && (
          <Calendar
            locale={lang === "en" ? enUS : es}
            minDate={new Date()}
            date={date}
            onChange={(item) => setDate(item)}
            className="absolute top-12 z-20"
          />
        )}
      </div>
    </div>
  );
};

export default Main;
