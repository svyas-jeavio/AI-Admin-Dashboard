"use client";

import { cn } from "@/lib/utils";
import { Message } from "@/types/message";
import CodeBlock from "./assistatant-message/CodeBlock";
import ProductCard from "./assistatant-message/ProductCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import parse from "html-react-parser";

export default function AssistantMessage({ message }: { message: Message }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(String(message.content));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const timeString = message.timestamp
    ? new Date(message.timestamp).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        fractionalSecondDigits: 3,
      })
    : null;

  return (
    <div className="flex flex-col items-start space-y-1">
      {/* message bubble */}
      <div className={cn("max-w-[100%] rounded-2xl py-3 px-4")}>
        {message.type === "text" && (
          <p className="whitespace-pre-wrap wrap-break-word break-all text-foreground">
            {parse(String(message.content))}
          </p>
        )}
        {message.type === "code" && (
          <CodeBlock code={message.content as string} />
        )}
        {message.type === "product" && (
          <ProductCard product={message.content as any} />
        )}
      </div>

      {/* footer with timestamp + copy */}
      <div className="flex items-center gap-2 text-xs text-gray-400 ml-2 mt-1">
        {timeString && <span>{timeString}</span>}
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 hover:bg-muted-foreground/10"
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-gray-400" />
          )}
        </Button>
      </div>
    </div>
  );
}
