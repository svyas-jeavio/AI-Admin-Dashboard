// types/message.ts
export type MessageRole = "user" | "assistant";

export type AssistantContentType = "text" | "code" | "product";

export interface Message {
  id: string;
  role: MessageRole;
  type?: AssistantContentType; // only used for assistant
  content: string | object;
}
