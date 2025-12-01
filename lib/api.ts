import { ChatNode } from "@/types/chat";
import { Message } from "@/types/message";
import { User } from "@/types/user";

// export async function initChat(): Promise<ChatNode | null> {
//   try {
//     const res = await fetch("http://localhost:8081/chat/init", {
//       method: "POST",
//       headers: { accept: "application/json" },
//     });
//     if (!res.ok) throw new Error("Failed to init chat");
//     return (await res.json()) as ChatNode;
//   } catch (err) {
//     console.error("Error initializing chat:", err);
//     return null;
//   }
// }
const CHAT_API = process.env.NEXT_PUBLIC_CHAT_API;

export async function initChat(user?: User): Promise<ChatNode | null> {
  try {
    const res = await fetch(`${CHAT_API}/chat/init`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!res.ok) throw new Error("Failed to init chat");
    return (await res.json()) as ChatNode;
  } catch (err) {
    console.error("Error initializing chat:", err);
    return null;
  }
}

export async function sendChatMessage(
  chatId: string,
  query: string
): Promise<Message> {
  const res = await fetch(
    `${CHAT_API}/chat?chat_id=${chatId}&query=${encodeURIComponent(query)}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    }
  );

  if (!res.ok) throw new Error("Failed to get chat response");

  return (await res.json()) as Message;
}
