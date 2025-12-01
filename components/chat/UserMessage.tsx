"use client";

import { Message } from "@/types/message";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "../ui/button";
import { Check, Copy } from "lucide-react";
import parse from "html-react-parser";

export default function UserMessage({ message }: { message: Message }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(String(message.content));
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
    <div className="flex flex-col items-end w-full pb-3 space-y-1">
      {/* Message bubble */}
      <div
        className={cn(
          "relative break-words",
          "max-w-[85%] sm:max-w-[70%]",
          "rounded-2xl px-4 py-3",
          "bg-primary text-primary-foreground"
        )}
      >
        <p className="whitespace-pre-wrap wrap-break-words">
          {message.content as string}
        </p>
      </div>

      {/* Below section */}
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
