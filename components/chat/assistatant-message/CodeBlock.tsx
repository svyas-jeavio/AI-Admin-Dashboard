// components/chat/CodeBlock.tsx
"use client";
import { Copy } from "lucide-react";

export default function CodeBlock({ code }: { code: string }) {
  return (
    <div className="relative border rounded-lg p-4 bg-muted px-4 text-sm font-mono">
      <pre className="overflow-x-auto whitespace-pre-wrap">{code}</pre>
      <button
        onClick={() => navigator.clipboard.writeText(code)}
        className="absolute top-2 right-2 text-zinc-400 hover:text-white"
      >
        <Copy size={16} />
      </button>
    </div>
  );
}
