"use client";
import React, { useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

interface Props {
  placeholder: string;
  keyName: string;
  icon: JSX.Element;
  onChange: (key: string, value: string) => void; // Callback function
}

const InputGeneric: React.FC<Props> = ({
  placeholder,
  keyName,
  icon,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onChange(keyName, value);
  };

  return (
    <div
      className={`
    flex items-center rounded-lg 
    w-full h-[68.35px] bg-laborit-input-edit-background 
    dark:bg-laborit-input-edit-background-dark`}
    >
      <div className="flex items-center pl-4">{icon}</div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="flex-1 py-2 pl-6 bg-transparent border-0 outline-none font-semibold tracking-[.1em] text-laborit-text-placeholder dark:text-white"
      />
      <button
        disabled={!inputValue}
        type="button"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-laborit-blue dark:bg-laborit-dark-blue"
      >
        <PencilSquareIcon className="h-6 w-6 text-gray-400" />
      </button>
    </div>
  );
};

export default InputGeneric;
