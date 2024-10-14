"use client";
import React from "react";
import DisplayMessage from "./DisplayMessage";

interface Props {
  messages: Message[];
}

const MessagesList: React.FC<Props> = ({ messages }) => {
  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    alert("Message copied to clipboard!");
  };

  const handleShare = (content: string) => {
    alert("Sharing: " + content);
  };

  const handleEdit = (content: string) => {
    alert("Editing: " + content);
  };

  return (
    <div>
      {messages.map((message, index) => (
        <DisplayMessage
          key={index}
          message={message}
          onCopy={() => handleCopy(message.content)}
          onShare={() => handleShare(message.content)}
          onEdit={() => handleEdit(message.content)}
        />
      ))}
    </div>
  );
};

export default MessagesList;
