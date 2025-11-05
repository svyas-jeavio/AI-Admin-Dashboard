"use client";

import { Usage } from "./schema/UsageSchema";
import { UsageCard } from "./UsageCard";
import { UsageCardGrid } from "./UsageCardGrid";
import UsageTable, { UsageData } from "./UsageTable";

export default function UsageDashboard() {
  const usageData: UsageData[] = [
    {
      id: 1,
      user: "Alice",
      usage: 120,
      last24h: 15,
      plan: "Free",
      status: "active",
    },
    {
      id: 2,
      user: "Bob",
      usage: 250,
      last24h: 40,
      plan: "Pro",
      status: "capped",
    },
    {
      id: 3,
      user: "Charlie",
      usage: 80,
      last24h: 10,
      plan: "Free",
      status: "active",
    },
    // ... more users
  ];
  return (
    <main className="grid flex-1 gap-8 p-6 sm:px-8">
      {/* Top Metrics */}
      <UsageCardGrid />

      {/* Table Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-foreground">
          Top Users Usage
        </h2>
        <UsageTable data={usageData} />
      </div>
    </main>
  );
}
