import React from "react";

function SelectedDot({ size = 18 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        fill="#141718"
        d="M8.84 15.154a6.314 6.314 0 100-12.628 6.314 6.314 0 000 12.628z"
      ></path>
      <path
        stroke="#141718"
        strokeWidth="0.5"
        d="M8.84 17.364a8.524 8.524 0 100-17.048 8.524 8.524 0 000 17.048z"
      ></path>
    </svg>
  );
}

export default SelectedDot;
