import { cn } from "@/lib/utils";
import AssistantMessage from "./AssistantMessage";
import UserMessage from "./UserMessage";
import { Message } from "@/types/message";

export default function ChatMessage({ message }: { message: Message }) {
  if (message.role === "user") {
    return <UserMessage message={message} />;
  }

  return <AssistantMessage message={message} />;
}
