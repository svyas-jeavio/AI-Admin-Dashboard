import { useState } from "react";
import { Message } from "@/types/message";
import { sendChatMessage } from "@/lib/api";

export function useChatHandler(chatId: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadMessages = (initial: Message[]) => setMessages(initial);

  const handleSend = async (text: string) => {
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const assistantMsg = await sendChatMessage(chatId, text);
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error("Chat error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, isLoading, handleSend, loadMessages };
}
