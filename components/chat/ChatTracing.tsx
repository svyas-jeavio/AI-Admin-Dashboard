"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const TRACES = [
  "Thinking…",
  "Analyzing your message…",
  "Gathering some details…",
  "Generating the best response…",
];

export default function ChatTracing() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TRACES.length);
    }, 2000); // change every 2s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full justify-start">
      <div
        className={cn(
          "max-w-[80%] text-muted-foreground text-sm",
          "rounded-2xl px-4 py-2 animate-fade-in"
        )}
      >
        {TRACES[index]}
      </div>
    </div>
  );
}
