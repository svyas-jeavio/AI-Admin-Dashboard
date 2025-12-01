import { User, LogOut } from "lucide-react";
import { useState } from "react";
import DarkModeToggle from "../DarkModeToggle";
import { Button } from "../ui/button";
import NavTabs from "./navtabs";

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-14 flex items-center justify-between px-4 backdrop-blur-md rounded-t-2xl">
      {/* Left: Logo */}
      <div className="flex items-center gap-2 select-none">
        <div className="w-8 h-8 bg-white rounded-md flex items-center text-black justify-center text-xs font-bold">
          K
        </div>
        <span className="font-semibold text-sm tracking-wide">Kexa</span>
      </div>

      {/* Middle: Navigation */}
      <NavTabs />

      {/* Right: User + Dark Mode */}
      <div className="flex flex-row space-x-3">
        <DarkModeToggle />
        <div className="relative">
          <Button
            variant={"outline"}
            onClick={() => setOpen((o) => !o)}
            className="flex items-center border justify-center w-9 h-9 hover:bg-neutral-700 transition"
          >
            <User className="w-5 h-5" />
          </Button>

          {open && (
            <div className="absolute right-0 mt-2 w-36 bg-neutral-800 border border-neutral-700 rounded-md shadow-lg py-1 text-sm animate-in fade-in zoom-in-95">
              <button className="w-full text-left px-3 py-2 flex items-center gap-2 hover:bg-neutral-700 transition">
                <LogOut className="w-4 h-4 text-neutral-300" />
                <a href="/auth/logout">Logout</a>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
