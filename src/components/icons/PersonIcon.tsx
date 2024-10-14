import React from "react";

function PersonIcon({ size = 25, selected = false, theme = "light" }) {
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
      viewBox="0 0 25 28"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M12.052 2.233a4.246 4.246 0 100 8.492 4.246 4.246 0 000-8.492zM6.005 6.479a6.047 6.047 0 1112.094 0 6.047 6.047 0 01-12.094 0zM2.817 20.344c1.87-1.998 4.911-3.502 9.578-3.502s7.708 1.504 9.578 3.502c1.847 1.972 2.474 4.345 2.474 5.976a.9.9 0 01-.901.9H1.244a.9.9 0 01-.9-.9c0-1.631.627-4.004 2.473-5.976zm-.595 5.075h20.347a7.435 7.435 0 00-1.91-3.845c-1.476-1.576-4.01-2.93-8.264-2.93s-6.788 1.354-8.263 2.93a7.434 7.434 0 00-1.91 3.845z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default PersonIcon;
