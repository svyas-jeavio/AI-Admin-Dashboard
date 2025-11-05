"use client";

import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
import TopBar from "@/components/topbar/topbar";
import UsageDashboard from "@/components/usage-dashboard/UsageDashboard";

export default function Usage() {
  const { user, isLoading } = useUser();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/me")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
      <div className="mx-auto px-6 py-6 flex flex-col gap-6">
        {/* Top bar */}
        <TopBar />
        <UsageDashboard />
      </div>
    </div>
  );
}
