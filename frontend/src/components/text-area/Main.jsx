"use client";
import { useTranslations } from "next-intl";

const Main = ({ placeholder = "", ...props }) => {
  const t = useTranslations();

  return (
    <div className="w-full relative mt-4">
      <label className="text-sm absolute top-0 -translate-y-1/2 left-3 bg-white px-0.5 pointer-events-none font-calibri-regular">
        {props?.label ? t(props.label) : ""}
      </label>
      <textarea
        className="w-full h-28 border border-c_golden rounded p-2 resize-none font-calibri-regular"
        placeholder={placeholder ? t(placeholder) : ""}
        {...props}
      />
    </div>
  );
};

export default Main;
