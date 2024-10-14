"use client";
import ChatExamples from "@/components/ChatExamples";
import InputChat from "@/components/InputChat";
import MessagesList from "@/components/MessagesList";
import PageContainer from "@/components/PageContainer";
import RegenerateIcon from "@/components/RegenerateIcon";
import { useTheme } from "next-themes";

const messagesMock = [
  {
    author: "user",
    avatar: "/assets/images/robot.jpeg",
    content: "Hello, can you help me?",
  },
  {
    author: "bot",
    avatar: "/assets/images/ai.png",
    content:
      "There are several over-the-counter and prescription medications that can be used to treat head pain. Some common ones include: Acetaminophen (Tylenol) - This is an over-the-counter medication that can be effective for mild to moderate headaches?",
  },
  {
    author: "user",
    avatar: "/assets/images/robot.jpeg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    author: "bot",
    avatar: "/assets/images/ai.png",
    content:
      "There are several over-the-counter and prescription medications that can be used to treat head pain. Some common ones include: Acetaminophen (Tylenol) - This is an over-the-counter medication that can be effective for mild to moderate headaches?",
  },
] as Message[];

export default function Chat() {
  const { theme } = useTheme();

  const handleSubmit = (message: string) => {
    console.log("Form submitted with message:", message);
  };

  const handleRegenerateResponse = () => {
    console.log("Regenerate response clicked");
  };

  const firstConversation = messagesMock.length === 0;

  return (
    <PageContainer
      title="Health"
      showMenu
      footer={
        <div className="mx-auto mb-[30px] mt-4 w-[346px] sm:w-full">
          <InputChat placeholder="Send a message." onSubmit={handleSubmit} />
        </div>
      }
    >
      {firstConversation ? (
        <ChatExamples />
      ) : (
        <>
          <MessagesList messages={messagesMock} />
          {messagesMock.length > 1 && (
            <button
              onClick={handleRegenerateResponse}
              className={`
                
                flex items-center justify-center 
                font-urbanist
                font-medium text-[12.97px]
                text-labotit-regenerate-button-text 
                dark:text-laborit-text-gray-p
                w-[181.22px] h-[47.58px] bg-laborit-regenerate-button-bg 
                dark:bg-laborit-regenerate-button-bg-dark
                border-[1.44px] border-laborit-regenerate-button-border 
                rounded-[8.65px] my-14 mx-auto`}
            >
              <RegenerateIcon theme={theme} size={14} />
              <span className="ml-2">Regenerate Response</span>
            </button>
          )}
        </>
      )}
    </PageContainer>
  );
}
