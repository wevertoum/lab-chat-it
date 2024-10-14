"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import ChatExamples from "@/components/ChatExamples";
import InputChat from "@/components/InputChat";
import MessagesList from "@/components/MessagesList";
import PageContainer from "@/components/PageContainer";
import RegenerateIcon from "@/components/RegenerateIcon";
import { useTheme } from "next-themes";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const LOCAL_STORAGE_KEY = "chat_conversation";
const initialMessages: Message[] = [];

export default function Chat() {
  const { theme } = useTheme();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedMessages = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const setMessagesAndSave = useCallback((newMessage: Message) => {
    const oldMessages = localStorage.getItem(LOCAL_STORAGE_KEY);
    const messages = oldMessages ? JSON.parse(oldMessages) : [];
    const updatedMessages = [...messages, newMessage];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedMessages));
    setMessages(updatedMessages);
  }, []);

  const handleSubmit = async (message: string) => {
    const newUserMessage: Message = {
      author: "user",
      avatar: "/assets/images/robot.jpeg",
      content: message,
    };
    setMessagesAndSave(newUserMessage);

    try {
      const response = await fetch("/api/chatgpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = (await response.json()) as ResponseChat;

      const newBotMessage: Message = {
        author: "bot",
        avatar: "/assets/images/ai.png",
        content: data.text,
      };
      setMessagesAndSave(newBotMessage);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleRegenerateResponse = () => {
    console.log("Regenerate response clicked");
  };

  const firstConversation = useMemo(() => messages.length === 0, [messages]);

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
          <MessagesList messages={messages} />
          {loading && (
            <div className="flex items-center justify-center mt-6">
              <ArrowPathIcon className="w-4 h-4 mr-2 animate-spin" />
              <p className="text-center text-laborit-text-gray-p dark:text-laborit-text-gray-p text-[12px]">
                Generating response...
              </p>
            </div>
          )}
          {!loading && messages.length > 1 && (
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
