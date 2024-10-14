import React from "react";

function SettingsIcon({ size = 33, theme = "light" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 33 33"
    >
      <path
        stroke={theme === "light" ? "#141718" : "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.062"
        d="M13.727 4.382c.662-2.732 4.548-2.732 5.21 0A2.681 2.681 0 0022.94 6.04c2.4-1.462 5.148 1.284 3.686 3.686a2.682 2.682 0 001.657 4c2.731.663 2.731 4.549 0 5.212a2.681 2.681 0 00-1.658 4.002c1.462 2.4-1.285 5.148-3.687 3.686a2.682 2.682 0 00-4 1.657c-.663 2.731-4.549 2.731-5.211 0a2.683 2.683 0 00-4.002-1.658c-2.4 1.462-5.149-1.285-3.687-3.687a2.682 2.682 0 00-1.656-4c-2.732-.663-2.732-4.549 0-5.211A2.683 2.683 0 006.04 9.725c-1.462-2.4 1.284-5.149 3.686-3.687a2.68 2.68 0 004-1.656z"
      ></path>
      <path
        stroke={theme === "light" ? "#141718" : "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4.083"
        d="M20.999 16.332a4.666 4.666 0 11-9.333 0 4.666 4.666 0 019.333 0v0z"
      ></path>
    </svg>
  );
}

export default SettingsIcon;
