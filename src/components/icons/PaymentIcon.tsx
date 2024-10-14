import React from "react";

function PaymentIcon({ size = 25, theme = "light" }) {
  const light = theme === "light";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 25 24"
    >
      <path
        fill={light ? "#141718" : "#fff"}
        d="M1.25 10.632a3.375 3.375 0 013.375-3.375h15.75a3.375 3.375 0 013.375 3.375v9a3.375 3.375 0 01-3.375 3.375H4.625a3.375 3.375 0 01-3.375-3.375v-9z"
      ></path>
      <path
        fill={light ? "#141718" : "#fff"}
        fillRule="evenodd"
        d="M.406 10.632a4.219 4.219 0 014.219-4.219h15.75a4.219 4.219 0 014.219 4.219v9a4.219 4.219 0 01-4.219 4.219H4.625a4.219 4.219 0 01-4.219-4.22v-9zM4.625 8.1a2.531 2.531 0 00-2.531 2.53v9a2.531 2.531 0 002.531 2.532h15.75a2.531 2.531 0 002.531-2.531v-9A2.531 2.531 0 0020.375 8.1H4.625z"
        clipRule="evenodd"
      ></path>
      <path
        fill={light ? "#fff" : "#141718"}
        d="M18.82 1.15L4.586 7.04c-.114.048-.08.217.043.217h15.634c.062 0 .113-.05.113-.112V2.19c0-.801-.815-1.346-1.556-1.04z"
      ></path>
      <path
        fill={light ? "#141718" : "#fff"}
        fillRule="evenodd"
        d="M19.532 2.19c0-.2-.204-.336-.389-.26L8.31 6.413h11.223V2.19zM18.498.37a1.969 1.969 0 012.721 1.82v4.954a.956.956 0 01-.956.957H4.63c-1.046 0-1.332-1.44-.365-1.84L18.498.37l.32.775-.32-.775z"
        clipRule="evenodd"
      ></path>
      <path
        fill={light ? "#fff" : "#141718"}
        fillRule="evenodd"
        d="M2.656 12.882c0-.466.378-.844.844-.844h18a.844.844 0 110 1.688h-18a.844.844 0 01-.844-.844zM3.781 18.507c0-.466.378-.844.844-.844h6.75a.844.844 0 110 1.688h-6.75a.844.844 0 01-.844-.844z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default PaymentIcon;
