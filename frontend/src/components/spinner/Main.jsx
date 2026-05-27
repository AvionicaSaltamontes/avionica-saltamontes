import { cn } from "@/lib/cn";

const Main = ({ className = "" }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        role="status"
        aria-label="loading"
        className={cn("animate-spin inline-block size-7 border-[3px] border-current border-t-transparent text-white rounded-full", className)}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Main;
