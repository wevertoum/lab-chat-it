import React from "react";

function ClockIcon({ size = 25 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 25 26"
    >
      <path
        fill="#9E9E9E"
        fillRule="evenodd"
        d="M12.522 2.313c-5.797 0-10.513 4.716-10.513 10.513s4.716 10.513 10.513 10.513 10.513-4.716 10.513-10.513S18.319 2.313 12.522 2.313zm0 22.881c-6.82 0-12.369-5.548-12.369-12.368S5.702.458 12.522.458c6.82 0 12.368 5.548 12.368 12.368s-5.548 12.368-12.368 12.368z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#9E9E9E"
        fillRule="evenodd"
        d="M16.765 17.393a.935.935 0 01-.475-.13l-4.662-2.782a.934.934 0 01-.453-.797V7.687a.928.928 0 011.855 0v5.47l4.211 2.51a.93.93 0 01-.476 1.726z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default ClockIcon;
