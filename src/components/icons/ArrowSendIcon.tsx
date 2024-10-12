import React from "react";

function ArrowSendIcon({ size = 19 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 19 19"
    >
      <path
        fill="#DDDDE4"
        fillRule="evenodd"
        d="M18.464 10.13a.49.49 0 00.01-.284C17.882 7.62 6.857 1.293 3.393.23 2.49-.047 1.836.064 1.452.56.339 1.998 2.637 6.466 3.978 8.8l6.948.245a.73.73 0 01-.05 1.462L3.86 10.26C2.35 12.526-.157 16.713.838 18.2c.037.056.078.108.122.156.367.395.97.499 1.79.309 3.527-.817 14.965-6.353 15.714-8.535z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default ArrowSendIcon;
