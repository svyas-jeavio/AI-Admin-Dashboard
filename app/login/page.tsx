"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import ThemeToggle from "../../components/DarkModeToggle";
import { useUser } from "@auth0/nextjs-auth0";

export default function Login() {
  const { user, isLoading, error } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/home");
    }
  }, [user, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900 mx-auto" />
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Checking login status…
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="relative flex items-center justify-center min-h-screen px-4">
        <div className="absolute top-4 right-4 z-10">
          <ThemeToggle />
        </div>

        <div className="w-full max-w-sm space-y-6 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">Welcome</h1>
          <p className="text-sm opacity-80">
            Please log in or create an account
          </p>
          <div className="space-y-3">
            <a
              className="block w-full px-4 py-2 font-medium text-black border border-gray-300 rounded-md bg-gray-100/70 hover:bg-gray-100 transition"
              href="/auth/login"
            >
              Login / Signup
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
