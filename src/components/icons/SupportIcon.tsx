import React from "react";

function SupportIcon({ size = 33, theme = "light" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 33 34"
    >
      <path
        stroke={theme === "light" ? "#141718" : "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.062"
        d="M16.332 30.949c7.732 0 14-6.268 14-14 0-7.73-6.268-13.998-14-13.998-7.731 0-13.999 6.267-13.999 13.999 0 7.731 6.268 13.999 14 13.999z"
      ></path>
      <path
        stroke={theme === "light" ? "#141718" : "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.062"
        d="M12.372 12.866a4.083 4.083 0 017.935 1.361c0 2.722-4.083 4.083-4.083 4.083M16.332 23.755h.013"
      ></path>
    </svg>
  );
}

export default SupportIcon;
