import React from "react";

function InviteFriendsIcon({ size = 27, theme = "light" }) {
  const light = theme === "light";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 27 28"
    >
      <path
        fill={light ? "#141718" : "#fff"}
        d="M11.058 21.657l-6.214 1.595a.583.583 0 01-.71-.71l1.595-6.214a.584.584 0 01.152-.268L17.476 4.465a.583.583 0 01.825 0l4.62 4.62a.583.583 0 010 .824L11.325 21.505a.584.584 0 01-.268.152z"
      ></path>
      <path
        fill={light ? "#141718" : "#fff"}
        fillRule="evenodd"
        d="M18.92 3.846l4.62 4.62c.569.569.569 1.492 0 2.062L11.943 22.123a1.458 1.458 0 01-.669.381L5.062 24.1a1.458 1.458 0 01-1.775-1.775L4.88 16.11c.065-.253.197-.484.381-.669L16.857 3.846c.57-.57 1.493-.57 2.063 0zm-1.031 1.443L6.556 16.622l-1.452 5.66 5.66-1.453L22.095 9.496 17.889 5.29z"
        clipRule="evenodd"
      ></path>
      <path
        fill={light ? "#fff" : "#141718"}
        fillRule="evenodd"
        d="M18.51 8.878a.875.875 0 010 1.237l-7 7a.875.875 0 01-1.238-1.237l7-7a.875.875 0 011.237 0zM8.131 18.017a.875.875 0 011.238 0l1.166 1.167a.875.875 0 11-1.237 1.237L8.13 19.255a.875.875 0 010-1.238z"
        clipRule="evenodd"
      ></path>
      <path
        fill={light ? "#141718" : "#fff"}
        fillRule="evenodd"
        d="M20.382 1.1a.875.875 0 011.238 0l4.666 4.667a.875.875 0 11-1.237 1.237l-4.667-4.667a.875.875 0 010-1.237z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default InviteFriendsIcon;
