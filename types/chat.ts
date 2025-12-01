import { Message } from "./message";

export interface ChatNode {
  chat_id: string;
  messages: Message[];
  chat_summary: string | null;
  json_metadata: Record<string, unknown>;
}
