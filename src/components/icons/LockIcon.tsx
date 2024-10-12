import React from "react";

function LockIcon({ size = 33, theme = "light" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 33 34"
    >
      <rect
        width="23.72"
        height="16.336"
        x="4.473"
        y="14.762"
        stroke={theme === "light" ? "#141718" : "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.062"
        rx="1.021"
      ></rect>
      <path
        stroke={theme === "light" ? "#141718" : "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.062"
        d="M16.452 21.651v2.505M10.549 13.748V9.022a6.125 6.125 0 016.125-6.125h1.225a6.125 6.125 0 016.124 6.125v1.002"
      ></path>
    </svg>
  );
}

export default LockIcon;
