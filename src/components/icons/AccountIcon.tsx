import React from "react";

function AccountIcon({ size = 25, theme = "light" }) {
  const color = theme === "light" ? "#141718" : "#fff";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 25 25"
    >
      <path
        fill={color}
        d="M16.998 6.099a5.19 5.19 0 11-10.38 0 5.19 5.19 0 0110.38 0z"
      ></path>
      <path
        fill={color}
        fillRule="evenodd"
        d="M11.808 1.817a4.282 4.282 0 100 8.564 4.282 4.282 0 000-8.564zM5.709 6.099a6.099 6.099 0 1112.197 0 6.099 6.099 0 01-12.197 0z"
        clipRule="evenodd"
      ></path>
      <path
        fill={color}
        d="M23.4 24.092H.908c0-2.884 2.25-8.65 11.246-8.65S23.4 21.207 23.4 24.091z"
      ></path>
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.494 18.064c1.886-2.015 4.953-3.531 9.66-3.531 4.706 0 7.774 1.516 9.66 3.531 1.862 1.99 2.494 4.383 2.494 6.027A.908.908 0 0123.4 25H.908A.908.908 0 010 24.09c0-1.644.632-4.037 2.494-6.027zm-.6 5.12h20.52a7.498 7.498 0 00-1.927-3.878c-1.487-1.59-4.043-2.957-8.333-2.957s-6.846 1.367-8.333 2.957a7.498 7.498 0 00-1.927 3.877z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default AccountIcon;
