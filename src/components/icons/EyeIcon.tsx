import React from "react";

function EyeIcon({ size = 26, theme = "light" }) {
  const color = theme === "light" ? "#141718" : "#fff";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size * 0.65}
      viewBox="0 0 26 17"
    >
      <path
        fill={color}
        d="M1.388 8.778a.107.107 0 010-.137C1.972 7.915 7.142 1.709 13 1.709c5.859 0 11.028 6.206 11.612 6.932a.107.107 0 010 .137C24.028 9.503 18.86 15.71 13 15.71c-5.858 0-11.028-6.206-11.612-6.93z"
      ></path>
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.474 8.71c.6.687 1.763 1.928 3.282 3.117 2.043 1.6 4.608 3.008 7.244 3.008 2.637 0 5.201-1.408 7.245-3.008a24.701 24.701 0 003.281-3.118 24.703 24.703 0 00-3.281-3.117C18.2 3.992 15.637 2.584 13 2.584c-2.636 0-5.2 1.408-7.244 3.008A24.705 24.705 0 002.474 8.71zm2.203-4.496C6.829 2.53 9.778.834 13 .834c3.222 0 6.172 1.696 8.324 3.38a25.939 25.939 0 013.97 3.878.982.982 0 010 1.235 25.939 25.939 0 01-3.97 3.878c-2.152 1.684-5.102 3.38-8.324 3.38-3.222 0-6.171-1.696-8.323-3.38a25.938 25.938 0 01-3.97-3.878.982.982 0 010-1.235 25.939 25.939 0 013.97-3.878z"
        clipRule="evenodd"
      ></path>
      <path
        fill={color}
        d="M16.5 8.71a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
      ></path>
      <path
        fill={color}
        fillRule="evenodd"
        d="M13 6.084a2.625 2.625 0 100 5.25 2.625 2.625 0 000-5.25zM8.625 8.71a4.375 4.375 0 118.75 0 4.375 4.375 0 01-8.75 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default EyeIcon;
