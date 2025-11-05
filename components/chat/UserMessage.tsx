"use client";

import { Message } from "@/types/message";
import { cn } from "@/lib/utils";

export default function UserMessage({ message }: { message: Message }) {
  return (
    <div className="flex justify-end w-full pb-3">
      <div
        className={cn(
          // Layout
          "relative break-words",
          "max-w-[85%] sm:max-w-[70%]", // narrower on desktop
          "rounded-2xl px-4 py-3",
          // Style
          "bg-primary text-primary-foreground"
        )}
      >
        <p className="whitespace-pre-wrap break-words">
          {message.content as string}
        </p>
      </div>
    </div>
  );
}
