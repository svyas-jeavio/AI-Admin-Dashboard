"use client";

import ChatInput from "./ChatInput";

interface ChatLandingProps {
  onSend: (message: string) => void;
}

export default function ChatLanding({ onSend }: ChatLandingProps) {
  return (
    <div className="flex flex-col flex-1 items-center justify-center text-center px-2 sm:px-6">
      <div className="max-w-2xl mx-auto space-y-4">
        <h1 className="text-3xl font-semibold text-foreground">Hi, I'm Kexa</h1>
        <p className="text-muted-foreground">
          I can help you with your or your loved one's health
        </p>
      </div>

      {/* Chat input at center */}
      <div className="w-full max-w-2xl mt-10">
        <ChatInput onSend={onSend} />
      </div>
    </div>
  );
}
