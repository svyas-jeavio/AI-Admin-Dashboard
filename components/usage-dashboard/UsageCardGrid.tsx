"use client";

import { UsageCard } from "./UsageCard";

export function UsageCardGrid() {
  const metrics = [
    {
      title: "Active Users (Last 1h)",
      value: 128,
      trend: "+8.2%",
      trendDir: "up",
      subtext: "Increased engagement",
      description: "Compared to last hour",
    },
    {
      title: "Users Reached Cap",
      value: 34,
      trend: "+3 users",
      trendDir: "up",
      subtext: "Usage limits increasing",
      description: "Monitor plan upgrades",
    },
    {
      title: "Free Tier Users",
      value: "2,341",
      trend: "-4.3%",
      trendDir: "down",
      subtext: "Gradual conversion",
      description: "Free → Paid transition",
    },
    {
      title: "Total Usage (24h)",
      value: "45.2k Calls",
      trend: "+12.5%",
      trendDir: "up",
      subtext: "Stable growth",
      description: "API calls across all users",
    },
  ] as const;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card *:data-[slot=card]:shadow-xs">
      {metrics.map((m, i) => (
        <UsageCard key={i} {...m} />
      ))}
    </div>
  );
}
