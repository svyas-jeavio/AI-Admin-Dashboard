"use client";

import { useEffect, useRef } from "react";
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
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // smooth scroll to last message or tracing
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <ScrollArea className="flex-1 p-6 space-y-4">
      {messages.map((msg) =>
        msg.role === "assistant" ? (
          <AssistantMessage key={msg.id} message={msg} />
        ) : (
          <UserMessage key={msg.id} message={msg} />
        )
      )}

      {isLoading && <ChatTracing />}

      {/* 👇 anchor element to scroll to bottom */}
      <div ref={bottomRef} />
    </ScrollArea>
  );
}
