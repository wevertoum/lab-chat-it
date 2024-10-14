"use client";
import React from "react";
import DisplayMessage from "./DisplayMessage";

interface Props {
  messages: Message[];
  onUpdateMessage: (newMessage: Message) => void;
}

const MessagesList: React.FC<Props> = ({ messages, onUpdateMessage }) => {
  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    alert("Message copied to clipboard!");
  };

  const handleShare = (content: string) => {
    alert("Sharing: " + content);
  };

  const handleEdit = (newMessage: Message) => {
    onUpdateMessage(newMessage);
  };

  return (
    <div>
      {messages.map((message, index) => (
        <DisplayMessage
          key={index}
          message={message}
          onCopy={() => handleCopy(message.content)}
          onShare={() => handleShare(message.content)}
          handleUpdateMessage={handleEdit}
        />
      ))}
    </div>
  );
};

export default MessagesList;
