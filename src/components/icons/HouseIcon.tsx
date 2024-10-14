import React from "react";

function HouseIcon({ size = 25, selected = false, theme = "light" }) {
  const color = selected
    ? theme === "dark"
      ? "#FFFFFF"
      : "#141416"
    : "#9E9E9E";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 25 25"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M1.65 9.35a3.604 3.604 0 00-1.194 2.679v9.207A3.604 3.604 0 004.06 24.84H20.88a3.604 3.604 0 003.604-3.604v-9.207A3.604 3.604 0 0023.29 9.35l-8.41-7.568a3.604 3.604 0 00-4.822 0L1.65 9.35zm9.618 4.678a2.403 2.403 0 00-2.403 2.402v4.806c0 .663.538 1.201 1.202 1.201h4.805c.664 0 1.201-.538 1.201-1.201V16.43a2.403 2.403 0 00-2.402-2.402h-2.403z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default HouseIcon;
