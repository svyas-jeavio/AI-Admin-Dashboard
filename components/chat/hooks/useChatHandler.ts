"use client";

import { useState } from "react";
import { Message } from "@/types/message";

export function useChatHandler() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = (text: string) => {
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    // Mock assistant response
    setTimeout(() => {
      const mockAssistantMessages: Message[] = [
        {
          id: crypto.randomUUID(),
          role: "assistant",
          type: "text",
          content:
            "This is a mock response from the assistant. How can I assist you further?",
        },
      ];

      setMessages((prev) => [...prev, ...mockAssistantMessages]);
      setIsLoading(false);
    }, 800);
  };

  return { messages, isLoading, handleSend };
}
