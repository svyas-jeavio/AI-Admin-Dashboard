"use client";

import { Message } from "@/types/message";
import AssistantMessage from "./AssistantMessage";
import UserMessage from "./UserMessage";
import { ScrollArea } from "../ui/scroll-area";
import ChatTracing from "./ChatTracing";

export default function ChatScrollArea({
  messages,
  isLoading,
}: {
  messages: Message[];
  isLoading?: boolean;
}) {
  return (
    <ScrollArea className="flex-1 p-6 space-y-4">
      {messages.map((msg) =>
        msg.role === "assistant" ? (
          <AssistantMessage key={msg.id} message={msg} />
        ) : (
          <UserMessage key={msg.id} message={msg} />
        )
      )}
      {isLoading && <ChatTracing />} {/* 👈 right below the last message */}
    </ScrollArea>
  );
}
