'use client'

import { useSession } from 'next-auth/react'
import { SignIn } from '@/components/SignIn'
import { UserProfile } from '@/components/UserProfile'

export default function Home() {
  const { data: session } = useSession()

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col justify-between py-16 px-6 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black dark:text-white">
              Agentic Coding
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Exploring how Claude can be used as an AI coding agent to automate
              development workflows and improve productivity.
            </p>
          </div>
          {session && <UserProfile session={session} />}
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-12">
          {/* Authentication Status */}
          {!session && (
            <section className="space-y-4 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950 p-6">
              <h2 className="text-lg font-semibold text-black dark:text-white">
                Sign In to Continue
              </h2>
              <SignIn />
            </section>
          )}

          {/* Project Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              About This Project
            </h2>
            <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl">
              This is a collection of notes, ideas, and experiments exploring
              agentic patterns in development. We&apos;re testing how Claude can
              analyze issues, plan solutions, implement fixes, run tests, and
              manage the entire development workflow autonomously.
            </p>
          </section>

          {/* Key Features */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              Key Capabilities
            </h2>
            <ul className="space-y-3">
              {[
                'Automated issue analysis and implementation',
                'Custom slash commands for repetitive workflows',
                'Daily session logging and automated commits',
                'Parallel task execution with git worktrees',
                'Desktop notifications for Claude input requests',
                'Test-driven development workflows',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">
                    →
                  </span>
                  <span className="text-base text-zinc-700 dark:text-zinc-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Quick Links */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              Get Started
            </h2>
            <p className="text-base text-zinc-700 dark:text-zinc-300 mb-4">
              Explore the project and see how agentic coding works:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/coodeex/agentic-coding"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
              <a
                href="/docs"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 text-black dark:text-white font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                Read Documentation
              </a>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-sm text-zinc-600 dark:text-zinc-500 border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <p>Built with Next.js 16 and Tailwind CSS • Powered by Claude AI</p>
        </div>
      </main>
    </div>
  )
}
