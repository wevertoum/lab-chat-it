import React from "react";

interface Props {
  size?: number;
  direction?: "left" | "right";
  fixedColor?: string;
}

function ChevronIcon({ size = 10, direction = "left", fixedColor }: Props) {
  const rotationClass = direction === "right" ? "rotate-180" : "";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size * 1.5}
      fill="none"
      viewBox="0 0 10 15"
      className={rotationClass}
    >
      <path
        className={
          fixedColor ? "" : `stroke-black dark:stroke-laborit-text-gray-title`
        }
        style={fixedColor ? { stroke: fixedColor } : {}}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.368"
        d="M7.921 2L2 7.547l5.921 5.92"
      ></path>
    </svg>
  );
}

export default ChevronIcon;
