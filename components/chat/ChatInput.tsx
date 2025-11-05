import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SendHorizonal, FileText, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSend: (text: string) => void;
  onFileUpload?: (file: File) => void;
}

export default function ChatInput({ onSend, onFileUpload }: ChatInputProps) {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input.trim());
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onFileUpload) onFileUpload(file);
    e.target.value = "";
  };

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 220)}px`;
  }, [input]);

  return (
    <div className="relative w-full px-0 sm:px-4 py-4 bg-transparent">
      <div
        className={cn(
          "relative flex items-end w-full rounded-4xl border border-border/50",
          "bg-muted/70 backdrop-blur-md shadow-lg transition-all px-4 py-3 focus-within:ring-2 focus-within:ring-ring/60"
        )}
      >
        {/* Left side + icon */}
        <div className="flex items-center gap-1 mr-2">
          <div className="relative group">
            <Button
              size="icon"
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              <Plus className="h-5 w-5" />
            </Button>

            {/* Hidden upload trigger */}
            <label className="absolute left-full ml-2 top-1/2 -translate-y-1/2 hidden group-hover:flex cursor-pointer items-center gap-1 p-2 rounded-md bg-muted/90 shadow-md border border-border/50">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Upload</span>
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>

        {/* Textarea */}
        <textarea
          ref={textareaRef}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Send a message..."
          className={cn(
            "w-full resize-none bg-transparent outline-none text-base",
            "py-2 max-h-[220px] pr-10 text-foreground placeholder:text-muted-foreground"
          )}
        />

        {/* Send Button */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          onClick={handleSend}
        >
          <SendHorizonal className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
