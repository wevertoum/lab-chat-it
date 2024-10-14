"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ChatExamples from "@/components/ChatExamples";
import InputChat from "@/components/InputChat";
import MessagesList from "@/components/MessagesList";
import PageContainer from "@/components/PageContainer";
import RegenerateIcon from "@/components/RegenerateIcon";
import { useTheme } from "next-themes";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { generateUUID } from "@/utils/generateUUID";

const LOCAL_STORAGE_KEY = "chat_conversation";
const initialMessages: Message[] = [];

export default function Chat() {
  const { theme } = useTheme();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const setMessagesAndSave = useCallback((newMessage: Message) => {
    const oldMessages = localStorage.getItem(LOCAL_STORAGE_KEY);
    const messages = oldMessages ? JSON.parse(oldMessages) : [];
    const updatedMessages = [...messages, newMessage];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedMessages));
    setMessages(updatedMessages);
  }, []);

  const handleSubmit = useCallback(
    (message: string) => {
      const newUserMessage: Message = {
        id: generateUUID(),
        author: "user",
        avatar: "/assets/images/robot.jpeg",
        content: message,
      };
      setMessagesAndSave(newUserMessage);
      setLoading(true);
      fetch("/api/chatgpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      })
        .then(async (response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch response");
          }
          const data = (await response.json()) as ResponseChat;
          const newBotMessage: Message = {
            id: generateUUID(),
            author: "bot",
            avatar: "/assets/images/ai.png",
            content: data.text,
          };
          setMessagesAndSave(newBotMessage);
        })
        .catch((error) => {
          console.error("Error fetching from OpenAI:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [setMessagesAndSave]
  );

  const handleRegenerateResponse = () => {
    if (messages.length > 0 && messages[messages.length - 1].author === "bot") {
      const updatedMessages = messages.slice(0, -1);
      setMessages(updatedMessages);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedMessages));

      const lastUserMessage = updatedMessages
        .slice()
        .reverse()
        .find((msg) => msg.author === "user");

      if (lastUserMessage) {
        setLoading(true);
        fetch("/api/chatgpt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: lastUserMessage.content }),
        })
          .then(async (response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch response");
            }
            const data = (await response.json()) as ResponseChat;
            const newBotMessage: Message = {
              id: generateUUID(),
              author: "bot",
              avatar: "/assets/images/ai.png",
              content: data.text,
            };
            setMessagesAndSave(newBotMessage);
          })
          .catch((error) => {
            console.error("Error fetching from OpenAI:", error);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }
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
          <div ref={messagesEndRef} />
        </>
      )}
    </PageContainer>
  );
}
