import React from "react";

function CopyPasteIcon({ size = 25, theme = "light" }) {
  const color = theme === "light" ? "#141718" : "#fff";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 25 26"
    >
      <path
        fill={color}
        d="M.604 8.75A8.146 8.146 0 018.75.604h9.935a1.062 1.062 0 110 2.125H8.75a6.02 6.02 0 00-6.02 6.02v10.069a1.063 1.063 0 01-2.126 0V8.75z"
      ></path>
      <path
        fill={color}
        d="M22.07 5.624a62.86 62.86 0 00-13.89 0 2.849 2.849 0 00-2.513 2.493 60.323 60.323 0 000 14.015 2.849 2.849 0 002.513 2.494c4.591.513 9.3.513 13.89 0a2.849 2.849 0 002.514-2.494c.544-4.655.544-9.359 0-14.015a2.849 2.849 0 00-2.513-2.493z"
      ></path>
    </svg>
  );
}

export default CopyPasteIcon;
