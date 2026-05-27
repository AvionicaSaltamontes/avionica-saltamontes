import { Fragment } from "react";

const icon =
  "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22white%22%3E%3Cpath d=%22M9 16.17l-3.88-3.88a.996.996 0 10-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l10-10a.996.996 0 10-1.41-1.41L9 16.17z%22/%3E%3C/svg%3E";

const Main = ({ ...props }) => {
  return (
    <Fragment>
      <input
        {...props}
        type="checkbox"
        className="appearance-none w-4.5 h-4.5 cursor-pointer rounded border border-c_golden relative after:bg-contain after:bg-c_golden"
        style={{
          "--icon-url": `url('${icon}')`,
        }}
      />
      <style>
        {`
          input[type="checkbox"]:checked::after {
            content: '';
            position: absolute;
            inset: 0;
            background-image: var(--icon-url);
            background-repeat: no-repeat;
            background-position: center;
          }
        `}
      </style>
    </Fragment>
  );
};

export default Main;
