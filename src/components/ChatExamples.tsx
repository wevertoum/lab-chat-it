import React from "react";

function ChatExamples() {
  const tips = [
    "Remembers what user said earlier in the conversation",
    "Allows user to provide. follow-up corrections With Ai",
    "Limited knowledge of world and events after 2021",
    "May occasionally generate incorrect information",
    "May occasionally produce harmful instructions or biased content",
  ] as string[];

  return (
    <>
      <h1 className="text-[40px] mt-[50px] font-bold text-center text-laborit-text-gray-title  font-urbanist">
        BrainBox
      </h1>
      <div className="flex flex-col gap-4 mt-16 justify-center items-center">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="w-[346px] h-[82px] bg-laborit-box-example dark:bg-laborit-box-example-dark rounded-[14.49px] flex items-center justify-center"
          >
            <p className="text-[16px] text-laborit-text-gray-p font-urbanist tracking-[0.18px] text-center h-[46px] w-[309.77px]">
              {tip}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ChatExamples;
