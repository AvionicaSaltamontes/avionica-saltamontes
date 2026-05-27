import T from "@/components/texts/Main";

import { cn } from "@/lib/cn";

const Main = ({ label = "", children, ...props }) => {
  return (
    <div className={cn("w-full relative transition-all", props.value === "OTHER" && "min-w-[83px] w-[83px]")}>
      <label className="text-sm absolute top-0 -translate-y-1/2 left-3 bg-white px-0.5 pointer-events-none font-calibri-regular">
        <T value={label} />
      </label>
      <select {...props} className="w-full h-10 border border-c_golden rounded px-3 font-calibri-regular appearance-none">
        {children}
      </select>
      <span className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2">
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
  );
};

export default Main;
