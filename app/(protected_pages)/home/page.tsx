"use client";

import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
import TopBar from "../../../components/topbar/topbar";
import Chat from "@/components/chat/Chat";
import dynamic from "next/dynamic";
import { ChatNode } from "@/types/chat";
import { initChat } from "@/lib/api";

export default function Home() {
  const { user, isLoading, error } = useUser();
  const [data, setData] = useState<any>(null);
  const [chat, setChat] = useState<ChatNode | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  useEffect(() => {
    fetch("/api/me")
      .then((res) => res.json())
      .then((me) => {
        setData(me);
        initChat(me.user).then((res) => {
          if (res) setChat(res);
        });
      });
  }, []);

  // useEffect(() => {
  //   if (data) {
  //     console.log("user changed:", data.user);
  //   }
  // }, [data]);

  return (
    <div className="min-h-screen w-full text-neutral-100">
      <div className="w-[calc(100vw-16px)] mx-auto px-6 py-6 h-[calc(100vh-16px)] flex flex-col gap-6">
        <TopBar />

        <Chat
          pdfFile={uploadedFile}
          onFileUpload={setUploadedFile}
          chat={chat}
        />
      </div>
    </div>
  );
}
