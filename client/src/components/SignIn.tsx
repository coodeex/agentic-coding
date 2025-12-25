"use client";

import { signIn } from "next-auth/react";

export function SignIn() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        Sign in with your Google account to continue
      </p>
      <button
        onClick={() => signIn("google", { redirect: true, redirectTo: "/" })}
        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium transition-colors hover:bg-blue-700 active:bg-blue-800"
      >
        Sign in with Google
      </button>
    </div>
  );
}
