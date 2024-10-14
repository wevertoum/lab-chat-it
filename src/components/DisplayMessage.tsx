"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  DocumentDuplicateIcon,
  ShareIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

interface Props {
  message: Message;
  onCopy?: () => void;
  onShare?: () => void;
  handleUpdateMessage?: (newMessage: Message) => void;
}

const DisplayMessage: React.FC<Props> = ({
  message,
  onCopy,
  onShare,
  handleUpdateMessage = () => {},
}) => {
  const [editing, setEditing] = useState(false);
  const [editingContent, setEditingContent] = useState(message.content);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const onUpdate = () => {
    handleUpdateMessage({ ...message, content: editingContent });
    setEditingContent("");
    setEditing(false);
  };

  useEffect(() => {
    if (editing && textareaRef.current) {
      textareaRef.current.focus();
      const length = textareaRef.current.value.length;
      textareaRef.current.setSelectionRange(length, length);
    }
  }, [editing]);

  return (
    <div
      className={`w-full ${
        message.author === "bot"
          ? "bg-laborit-box-example dark:bg-laborit-secondary-dark"
          : ""
      }`}
    >
      <div className="flex flex-col mx-[34px] py-6">
        <div className="flex justify-between">
          <Image
            src={message.avatar}
            alt="Profile Picture"
            width={37}
            height={37}
            className="aspect-square object-cover rounded-[5px]"
          />
          <div className="flex space-x-2">
            {message.author === "bot" && (
              <>
                <button onClick={onCopy} aria-label="Copy message">
                  <DocumentDuplicateIcon className="h-4 w-4 text-gray-500 hover:text-gray-700" />
                </button>
                <button onClick={onShare} aria-label="Share message">
                  <ShareIcon className="h-4 w-4 text-gray-500 hover:text-gray-700" />
                </button>
              </>
            )}
            {message.author === "user" && !editing && (
              <button
                onClick={() => {
                  setEditing(true);
                  setEditingContent(message.content);
                }}
                aria-label="Edit message"
              >
                <PencilSquareIcon className="h-4 w-4 text-gray-500 hover:text-gray-700" />
              </button>
            )}
          </div>
        </div>
        <div className="flex-1 mt-6">
          {editing ? (
            <>
              <textarea
                ref={textareaRef}
                value={editingContent}
                onChange={(e) => setEditingContent(e.target.value)}
                className="w-full h-12 p-1 rounded-md text-[11.82px] focus:outline-none focus:ring-2 focus:ring-blue-400 text-laborit-text-placeholder dark:text-white"
              />
              <div className="flex justify-end gap-4 mt-2">
                <button
                  className="text-[12px] p-2 rounded-lg bg-red-400 text-white"
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>
                <button
                  className="text-[12px] p-2 rounded-lg bg-laborit-dark-gray dark:bg-laborit-button-save-dark"
                  onClick={onUpdate}
                >
                  Update
                </button>
              </div>
            </>
          ) : (
            <p className="font-medium font-urbanist text-[11.82px] text-laborit-text-message-ai  dark:text-laborit-text-gray-p">
              {message.content}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayMessage;
