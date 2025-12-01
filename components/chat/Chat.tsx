"use client";

import { useEffect } from "react";
import ChatInput from "./ChatInput";
import ChatLanding from "./ChatLanding";
import ChatScrollArea from "./ChatScrollArea";
import { useChatHandler } from "./hooks/useChatHandler";
import { ChatNode } from "@/types/chat";

interface ChatProps {
  pdfFile: File | null;
  onFileUpload: (file: File) => void;
  chat: ChatNode | null;
}

export default function Chat({ pdfFile, onFileUpload, chat }: ChatProps) {
  const { messages, isLoading, handleSend, loadMessages } = useChatHandler(
    chat?.chat_id || ""
  );

  // ✅ useEffect ensures messages load once when chat updates
  useEffect(() => {
    if (chat?.messages?.length) {
      loadMessages(chat.messages);
    }
  }, [chat]);

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      {messages.length === 0 && !pdfFile ? (
        <ChatLanding onSend={handleSend} />
      ) : (
        <div className="flex flex-col flex-1 h-full overflow-hidden">
          <div className="flex-1 flex justify-center overflow-hidden">
            <div className="w-full max-w-4xl flex flex-col h-full overflow-hidden">
              <ChatScrollArea messages={messages} isLoading={isLoading} />
            </div>
          </div>

          <div className="max-w-4xl mx-auto w-full px-0 sm:px-6 pb-6">
            <ChatInput onSend={(msg) => handleSend(msg)} />
          </div>
        </div>
      )}
    </div>
  );
}
