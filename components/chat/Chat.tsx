"use client";

import ChatInput from "./ChatInput";
import ChatLanding from "./ChatLanding";
import ChatScrollArea from "./ChatScrollArea";
import { useChatHandler } from "./hooks/useChatHandler";

export default function Chat() {
  const { messages, isLoading, handleSend } = useChatHandler();

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      {messages.length === 0 ? (
        <ChatLanding onSend={handleSend} />
      ) : (
        <div className="flex flex-col flex-1 h-full overflow-hidden">
          {/* chat content */}
          <div className="flex-1 flex justify-center overflow-hidden">
            {/* Centered chat area */}
            <div className="w-full max-w-3xl flex flex-col h-full overflow-hidden">
              <ChatScrollArea messages={messages} isLoading={isLoading} />
            </div>
          </div>

          {/* input area */}
          <div className="max-w-3xl mx-auto w-full px-0 sm:px-6 pb-6">
            <ChatInput onSend={handleSend} />
          </div>
        </div>
      )}
    </div>
  );
}
