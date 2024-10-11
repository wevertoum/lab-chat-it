import React from "react";

function DefaultDotIcon({ size = 10, theme = "light" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 10 10"
    >
      <path
        fill={theme === "light" ? "#23262F" : "#818181"}
        fillOpacity="0.5"
        d="M4.963 9.502a4.546 4.546 0 100-9.092 4.546 4.546 0 000 9.092z"
      ></path>
    </svg>
  );
}

export default DefaultDotIcon;
