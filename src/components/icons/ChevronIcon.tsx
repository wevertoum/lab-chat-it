import React from "react";

function ChevronIcon({ size = 10 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size * 1.5}
      fill="none"
      viewBox="0 0 10 15"
    >
      <path
        className="stroke-black dark:stroke-laborit-text-gray-title"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.368"
        d="M7.921 2L2 7.547l5.921 5.92"
      ></path>
    </svg>
  );
}

export default ChevronIcon;
