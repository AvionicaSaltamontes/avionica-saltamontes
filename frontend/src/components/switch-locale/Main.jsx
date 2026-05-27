"use client";
import { useLayoutEffect, useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { useLenis } from "lenis/react";

import Image from "next/image";

import { cn } from "@/lib/cn";

const Main = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const lenis = useLenis((lenis) => {});

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const listLangs = [
    { lang: "en", name: "ENG", flag: "/images/ic_us.svg" },
    { lang: "es", name: "ESP", flag: "/images/ic_mx.svg" },
  ];

  const switchLocale = (newLang) => {
    if (lang === newLang) return;

    const params = new URLSearchParams(window.location.search);
    params.set("step", "1");

    localStorage.setItem("lang-avionica", newLang);
    window.location.href = `${window.location.pathname}?${params.toString()}`;
  };

  useLayoutEffect(() => {
    const storedLocale = localStorage.getItem("lang-avionica") || "en";
    setLang(storedLocale);
  }, []);

  return (
    <div onMouseLeave={() => setOpen(false)} onClick={() => setOpen(true)} className="relative group">
      <div className="flex items-center gap-3 min-w-22 py-2">
        <Image
          src={listLangs.find((l) => l.lang === lang)?.flag}
          alt={listLangs.find((l) => l.lang === lang)?.name}
          width={640}
          height={480}
          className="w-8"
        />
        <p className="font-calibri-bold">{listLangs.find((l) => l.lang === lang)?.name}</p>
      </div>

      <div
        className={cn(
          "absolute top-9 left-0 right-0 bottom-0 bg-white min-h-min w-full flex flex-col ring ring-c_golden rounded",
          "group-hover:visible",
          "hidden group-hover:flex",
          open && "visible flex",
        )}
      >
        {listLangs.map((item, index) => (
          <button
            key={`langs-${index}`}
            type="button"
            className="flex justify-between items-center cursor-pointer px-2 py-1 group/button hover:bg-c_golden"
            onClick={() => switchLocale(item.lang)}
          >
            <Image src={item.flag} alt={item.name} width={640} height={480} className="w-6" />
            <p className="font-calibri-bold text-c_dark_blue text-center w-8 group-hover/button:text-white">{item.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Main;
