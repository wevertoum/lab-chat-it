import { useState } from "react";
import { generateUUID } from "@/utils/generateUUID";

interface Message {
  id: string;
  author: "user" | "bot";
  avatar: string;
  content: string;
}

interface ResponseChat {
  text: string;
}

interface FetchChatGPTOptions {
  message: string;
  addUserMessage?: boolean;
}

const useChatGPT = () => {
  const [loading, setLoading] = useState(false);

  const fetchChatGPT = async (
    { message, addUserMessage = false }: FetchChatGPTOptions,
    setMessagesAndSave: (newMessage: Message) => void
  ) => {
    if (addUserMessage) {
      const newUserMessage: Message = {
        id: generateUUID(),
        author: "user",
        avatar: "/assets/images/robot.jpeg",
        content: message,
      };

      setMessagesAndSave(newUserMessage);
    }

    setLoading(true);

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
        id: generateUUID(),
        author: "bot",
        avatar: "/assets/images/ai.png",
        content: data.text,
      };

      setMessagesAndSave(newBotMessage);
    } catch (error) {
      console.error("Error fetching from OpenAI:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, fetchChatGPT };
};

export default useChatGPT;
