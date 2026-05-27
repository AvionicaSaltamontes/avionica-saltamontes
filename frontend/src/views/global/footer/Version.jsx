import { version } from "../../../../package.json";

const Version = () => {
  return <p className="absolute bottom-0 left-1 text-[9px]">v {version}</p>;
};

export default Version;
