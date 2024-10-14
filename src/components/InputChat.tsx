import React, { useState } from "react";
import ArrowSendIcon from "./icons/ArrowSendIcon";

interface Props {
  onSubmit: (value: string) => void;
  placeholder: string;
}

const InputChat: React.FC<Props> = ({ onSubmit, placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue) return;
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center justify-between w-full h-[48px] pl-4 
        bg-laborit-input-background border-solid border rounded-lg
        border-laborit-input-border dark:bg-laborit-secondary-dark 
        dark:border-laborit-input-border-dark`}
    >
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
        type="text"
        placeholder={placeholder}
        className="w-full h-full py-2 bg-transparent border-0 outline-none font-urbanist text-laborit-text-placeholder dark:text-white"
      />
      <button
        disabled={!inputValue}
        type="submit"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-laborit-blue dark:bg-laborit-dark-blue"
      >
        <ArrowSendIcon size={19} />
      </button>
    </form>
  );
};

export default InputChat;
