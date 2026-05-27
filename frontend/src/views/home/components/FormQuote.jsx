"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import { Calendar } from "react-date-range";
import { enUS, es } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "@/app/calendarTheme.css";

import Container from "@/components/container/Main";
import T from "@/components/texts/Main";

import { cn } from "@/lib/cn";
import { useMainContext } from "@/context/Main";

import { listLocations } from "@/utils/data";

const Input = ({ placeholder = "", ...props }) => {
  const t = useTranslations("");

  return (
    <div className="w-full">
      <label className="pointer-events-none font-calibri-regular">{props.label && <T value={props.label} />} </label>
      <input
        type="text"
        className="border-b border-c_golden w-full h-8 font-calibri-bold"
        placeholder={placeholder ? t(placeholder) : ""}
        {...props}
      />
    </div>
  );
};

const Select = ({ children, ...props }) => {
  return (
    <div className={cn("w-full transition-all", props.value === "OTHER" && "w-[90px]")}>
      <label className="pointer-events-none font-calibri-regular">
        <T value={props.label} />
      </label>
      <div className="relative">
        <select {...props} className="border-b border-c_golden w-full h-8 font-calibri-bold appearance-none">
          {children}
        </select>
        <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 9l6 6l6 -6" />
          </svg>
        </span>
      </div>
    </div>
  );
};

const InputDate = ({ label = "", date, setDate }) => {
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
    <div ref={containerRef} className="w-full relative">
      <label className="pointer-events-none font-calibri-regular">
        <T value={label} />
      </label>
      <div onClick={() => setOpen(true)} className="border-b border-c_golden w-full h-8 cursor-pointer">
        <p className="font-calibri-bold">
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
            className="absolute top-16 z-20"
          />
        )}
      </div>
    </div>
  );
};

export const Form = () => {
  const router = useRouter();
  const { date, setDate, from, setFrom, to, setTo, otherFrom, setOtherFrom, toFrom, setToFrom } = useMainContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/cotizacion/?step=2");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-10">
      <div className="w-full flex gap-2">
        <Select label="label_from" value={from} onChange={(e) => setFrom(e.target.value)}>
          {listLocations.map((item, index) => (
            <option key={`from-${index}`}>{item}</option>
          ))}
          <option value="OTHER">
            <T value="label_other" />
          </option>
        </Select>
        {from === "OTHER" && (
          <Input value={otherFrom} onChange={(e) => setOtherFrom(e.target.value)} placeholder="label_white_your_origin_here" required />
        )}
      </div>

      <div className="w-full flex gap-2">
        <Select label="label_to" value={to} onChange={(e) => setTo(e.target.value)}>
          {listLocations.map((item, index) => (
            <option key={`from-${index}`}>{item}</option>
          ))}
          <option value="OTHER">
            <T value="label_other" />
          </option>
        </Select>
        {to === "OTHER" && <Input value={toFrom} onChange={(e) => setToFrom(e.target.value)} placeholder="label_write_your_destiny_here" required />}
      </div>

      <InputDate label="label_date" date={date} setDate={setDate} />

      <button
        type="submit"
        className="lg:text-xl bg-c_golden rounded-full h-10 lg:h-12 text-nowrap w-full lg:w-auto px-4 lg:px-6 text-white cursor-pointer font-calibri-bold lg:font-bold uppercase"
      >
        <T value="label_get_quote" />
      </button>
    </form>
  );
};

const Info = () => {
  return (
    <div className="w-full h-24 bg-white rounded-full ring-2 ring-slate-100 flex-col justify-center px-10 hidden lg:flex">
      <Form />
    </div>
  );
};

const FormQuote = () => {
  const { backgroundLoaded } = useMainContext();

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (backgroundLoaded) {
      setShow(true);
    }
  }, [backgroundLoaded]);

  return (
    <Fragment>
      <div className={cn("h-56 transition-all hidden lg:block duration-2000 delay-100 opacity-0", show ? "lg:-mt-[540px]" : "mt-0")} />

      <div
        className={cn(
          "w-full sticky -top-[110px] xl:-top-[76px] z-30 opacity-0 transition-opacity duration-2000 delay-100 lg:mb-20",
          show && "opacity-100",
        )}
      >
        <Container>
          <div className="w-full hidden lg:block">
            <h1 className="text-6xl font-calibri-bold text-center text-white">
              <T value="label_fly" />
            </h1>
            <h3 className="text-center text-2xl font-calibri-bold text-white mt-4 mb-10">
              <T value="label_experience_wonder" />
            </h3>
            <Info />
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default FormQuote;
