"use client";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";

interface UserProfileProps {
  session: Session | null;
}

export function UserProfile({ session }: UserProfileProps) {
  if (!session?.user) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-3">
        {session.user.image && (
          <Image
            src={session.user.image}
            alt={session.user.name || "User avatar"}
            width={80}
            height={80}
            className="rounded-full"
          />
        )}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-black dark:text-white">
            {session.user.name}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {session.user.email}
          </p>
        </div>
      </div>
      <button
        onClick={() => signOut({ redirect: true, redirectTo: "/" })}
        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-red-600 text-white font-medium transition-colors hover:bg-red-700 active:bg-red-800"
      >
        Sign out
      </button>
    </div>
  );
}
