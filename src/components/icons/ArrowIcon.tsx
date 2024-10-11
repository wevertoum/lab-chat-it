import React from "react";

interface Props {
  direction: "left" | "right";
  theme?: string;
  disabled?: boolean;
}

function ArrowIcon({ direction, theme = "light", disabled = false }: Props) {
  const rotationClass = direction === "right" ? "rotate-180" : "";

  const getColor = () => {
    if (theme === "dark") {
      return disabled ? "#66676B" : "#FFFFFF";
    } else {
      return disabled ? "#B1B5C4" : "#23262F";
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="9"
      fill="none"
      viewBox="0 0 14 9"
      className={rotationClass}
    >
      <path
        fill={getColor()}
        fillRule="evenodd"
        d="M4.91.265a1 1 0 00-1.414.057l-3.23 3.5a1 1 0 000 1.356l3.23 3.5a1 1 0 101.47-1.356L3.284 5.5H13a1 1 0 100-2H3.284l1.682-1.822A1 1 0 004.909.265z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default ArrowIcon;
