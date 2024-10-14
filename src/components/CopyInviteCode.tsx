"use client";
import React from "react";
import CopyPasteIcon from "@/components/icons/CopyPasteIcon";

interface Props {
  code: string;
  onCopy: () => void;
  theme?: string;
}

const CopyInviteCode: React.FC<Props> = ({ code, onCopy, theme }) => {
  return (
    <div
      className={`h-[74px] w-[344px] flex items-center justify-between rounded-[15px] border-[2px] border-laborit-dark-gray dark:border-white p-4 bg-laborit-input-edit-background dark:bg-laborit-dark-gray`}
    >
      <span className="font-semibold text-[17px] text-laborit-dark-gray dark:text-white ml-2">
        {code}
      </span>
      <button
        onClick={onCopy}
        className="flex items-center justify-center w-10 h-10 rounded-full"
      >
        <CopyPasteIcon theme={theme} />
      </button>
    </div>
  );
};

export default CopyInviteCode;
