"use client";
import { Fragment, useState, useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { cn } from "@/lib/cn";
import { listPhoneCodes } from "@/utils/data";

const Main = ({ type = "text", placeholder = "", valueSelect = "", onChangeSelect, ...props }) => {
  const lenis = useLenis((lenis) => {});

  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const listLangs = [
    { lang: "en", lada: "+1", flag: "/images/ic_us.svg" },
    { lang: "es", lada: "+52", flag: "/images/ic_mx.svg" },
  ];

  useEffect(() => {
    if (open) {
      document.body.setAttribute("data-lenis-prevent", "true");
    } else {
      document.body.removeAttribute("data-lenis-prevent");
    }
  }, [open]);

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
    <div ref={containerRef} className="w-full relative">
      <label className="text-sm absolute top-0 -translate-y-1/2 left-3 bg-white px-0.5 pointer-events-none font-calibri-regular">
        {props?.label ? t(props.label) : ""}
      </label>
      <input
        onClick={() => type === "tel" && setOpen(false)}
        type={type}
        className={cn("w-full h-10 border border-c_golden rounded px-3 font-calibri-regular", type === "tel" && "pl-28")}
        placeholder={placeholder ? t(placeholder) : ""}
        {...props}
      />

      {type === "tel" && (
        <Fragment>
          <div
            onClick={() => setOpen(true)}
            className=" absolute left-2 top-1/2 -translate-y-1/2 bg-neutral-100 py-0.5 text-base mt-0.5 rounded font-calibri-regular flex justify-center gap-3 w-full max-w-24 cursor-pointer"
          >
            <Image
              alt=""
              src={`/images/flags/${listPhoneCodes.find((l) => l.dial_code === valueSelect)?.code.toLocaleLowerCase()}.svg`}
              width={640}
              height={480}
              className="w-5"
            />
            <p className="font-calibri-regular text-c_dark_blue text-base">{valueSelect}</p>
          </div>

          {open && (
            <div className="absolute top-10 left-2 z-10 w-full max-w-24 h-28 overflow-x-hidden overflow-y-scroll">
              {open &&
                listPhoneCodes.map((item, index) => (
                  <button
                    onClick={() => {
                      onChangeSelect(item.dial_code);
                      setOpen(false);
                    }}
                    key={`langs-${index}`}
                    type="button"
                    className="flex justify-between items-center cursor-pointer px-2 bg-neutral-100 hover:bg-neutral-200 gap-3"
                  >
                    <Image alt="" src={`/images/flags/${item.code.toLocaleLowerCase()}.svg`} width={640} height={480} className="w-5" />
                    <p className="font-calibri-regular text-c_dark_blue text-center text-base w-9">{item.dial_code}</p>
                  </button>
                ))}
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default Main;
