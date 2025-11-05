// components/chat/AssistantMessage.tsx
"use client";

import { cn } from "@/lib/utils";
import { Message } from "@/types/message";
import CodeBlock from "./assistatant-message/CodeBlock";
import ProductCard from "./assistatant-message/ProductCard";

export default function AssistantMessage({ message }: { message: Message }) {
  return (
    <div className="flex justify-start">
      <div className={cn("max-w-[80%] rounded-2xl py-3 break-words")}>
        {message.type === "text" && <p>{message.content as string}</p>}
        {message.type === "code" && (
          <CodeBlock code={message.content as string} />
        )}
        {message.type === "product" && (
          <ProductCard product={message.content as any} />
        )}
      </div>
    </div>
  );
}
