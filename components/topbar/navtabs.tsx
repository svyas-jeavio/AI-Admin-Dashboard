"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // if you use shadcn/ui utils

const tabs = [
  { name: "Home", href: "/home" },
  { name: "Usage", href: "/usage" },
];

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-3">
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "text-sm font-medium px-3 py-1.5 rounded-md transition",
              active
                ? "bg-neutral-700 text-white"
                : "text-neutral-300 hover:bg-neutral-700/50"
            )}
          >
            {tab.name}
          </Link>
        );
      })}
    </nav>
  );
}
