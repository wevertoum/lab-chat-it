import React from "react";

function LogoutIcon({ size = 33, theme = "light" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 32 33"
    >
      <path
        fill={theme === "light" ? "#000" : "#fff"}
        fillRule="evenodd"
        d="M0 16.614c0-.67.544-1.215 1.215-1.215H22.27a1.215 1.215 0 010 2.43H1.215C.544 17.829 0 17.285 0 16.614z"
        clipRule="evenodd"
      ></path>
      <path
        fill={theme === "light" ? "#000" : "#fff"}
        fillRule="evenodd"
        d="M14.933 7.657a1.215 1.215 0 011.718 0l7.984 7.984c.538.537.538 1.41 0 1.947l-7.984 7.984a1.215 1.215 0 11-1.718-1.718l7.24-7.24-7.24-7.24a1.215 1.215 0 010-1.717z"
        clipRule="evenodd"
      ></path>
      <path
        fill={theme === "light" ? "#000" : "#fff"}
        fillRule="evenodd"
        d="M21.596 1.497c0-.67.544-1.215 1.215-1.215h7.397c.76 0 1.377.617 1.377 1.377V31.57c0 .76-.617 1.377-1.377 1.377h-8.477a1.215 1.215 0 010-2.43h7.424V2.712h-6.344c-.67 0-1.215-.544-1.215-1.215z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default LogoutIcon;
