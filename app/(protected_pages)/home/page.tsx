"use client";

import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useRef, useState } from "react";
import TopBar from "../../../components/topbar/topbar";
import Chat from "@/components/chat/Chat";

export default function Home() {
  const { user, isLoading, error } = useUser();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/me")
      .then((res) => res.json())
      .then(setData);
  }, []);
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
        {/* <div className=" rounded-2xl flex flex-col overflow-hidden"> */}
        <div className="w-[calc(100vw-16px)] mx-auto px-6 py-6  h-[calc(100vh-16px)] flex flex-col gap-6">
          <TopBar />
          <Chat />
        </div>
      </div>
    </>
  );
}
