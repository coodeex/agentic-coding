'use client';

import Link from 'next/link';

export default function Documentation() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black" id="documentation">
      <main className="flex min-h-screen w-full max-w-4xl flex-col justify-between py-16 px-6 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline text-sm mb-4">
            ← Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black dark:text-white">
            Documentation
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
            A comprehensive guide to the Agentic Coding project and how to get started.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-12">
          {/* What is Agentic Coding */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              What is Agentic Coding?
            </h2>
            <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl">
              Agentic Coding is a collection of notes, ideas, and experiments exploring how Claude can be used as an AI coding agent to automate development workflows and improve productivity.
            </p>
            <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl">
              This project tests how Claude can analyze issues, plan solutions, implement fixes, run tests, and manage the entire development workflow autonomously using custom commands and automation patterns.
            </p>
          </section>

          {/* Key Capabilities */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              Key Capabilities
            </h2>
            <ul className="space-y-3">
              {[
                "Automated issue analysis and implementation",
                "Custom slash commands for repetitive workflows",
                "Daily session logging and automated commits",
                "Parallel task execution with git worktrees",
                "Desktop notifications for Claude input requests",
                "Test-driven development workflows"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">→</span>
                  <span className="text-base text-zinc-700 dark:text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Project Structure */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              Project Structure
            </h2>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-auto">
              <pre className="text-sm text-zinc-800 dark:text-zinc-200 font-mono">
{`agentic-coding/
├── client/                 # Next.js 16 application
│   ├── src/app/           # Next.js app directory with React components
│   ├── public/            # Static assets
│   └── package.json       # Dependencies and build scripts
├── .claude/               # Claude Code configuration
│   ├── commands/          # Custom slash commands
│   └── settings.json      # Tool permissions and hooks
├── logs/                  # Daily session logs (generated)
└── README.md              # Project notes and ideas`}
              </pre>
            </div>
          </section>

          {/* Key Technologies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              Key Technologies
            </h2>
            <ul className="space-y-2">
              {[
                { name: "Next.js 16", description: "React framework with TypeScript support" },
                { name: "React 19", description: "UI library for building components" },
                { name: "Tailwind CSS 4", description: "Utility-first CSS framework with PostCSS" },
                { name: "ESLint 9", description: "JavaScript linting for code quality" }
              ].map((tech, index) => (
                <li key={index} className="text-base text-zinc-700 dark:text-zinc-300">
                  <span className="font-semibold text-black dark:text-white">{tech.name}:</span> {tech.description}
                </li>
              ))}
            </ul>
          </section>

          {/* Development Commands */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              Development Commands
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-black dark:text-white mb-2">Client Application</h3>
                <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-auto">
                  <pre className="text-sm text-zinc-800 dark:text-zinc-200 font-mono">
{`# Navigate to client directory
cd client

# Start development server (localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Run linting with auto-fix
pnpm lint -- --fix`}
                  </pre>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-white mb-2">Git & Logging</h3>
                <p className="text-base text-zinc-700 dark:text-zinc-300 mb-2">
                  A custom <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm">/log-commit-push</code> command is available for automated workflow:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="text-base text-zinc-700 dark:text-zinc-300">• Stages all changes</li>
                  <li className="text-base text-zinc-700 dark:text-zinc-300">• Appends a summary to the daily log file</li>
                  <li className="text-base text-zinc-700 dark:text-zinc-300">• Generates and commits with a concise message</li>
                  <li className="text-base text-zinc-700 dark:text-zinc-300">• Pushes to remote</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Development Workflow */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              Development Workflow
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-black dark:text-white mb-2">Recommended Process</h3>
                <ol className="space-y-2">
                  {[
                    "Make changes to the codebase",
                    "Test locally with pnpm dev",
                    "Lint and fix with pnpm lint -- --fix",
                    "Verify changes with the development server",
                    "Use /log-commit-push to automate commit and push"
                  ].map((step, index) => (
                    <li key={index} className="text-base text-zinc-700 dark:text-zinc-300">
                      <span className="font-semibold text-black dark:text-white">{index + 1}.</span> {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-white mb-2">Code Quality Standards</h3>
                <ul className="space-y-2">
                  {[
                    "Run linting before committing",
                    "Use TypeScript types for type safety",
                    "Follow Next.js and React 19 best practices",
                    "Keep components focused and modular"
                  ].map((standard, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5">•</span>
                      <span className="text-base text-zinc-700 dark:text-zinc-300">{standard}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Advanced Features */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              Advanced Features
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-black dark:text-white mb-2">Git Worktrees</h3>
                <p className="text-base text-zinc-700 dark:text-zinc-300 mb-3">
                  Multiple Claude instances can work in parallel using git worktrees. This lightweight approach enables concurrent development:
                </p>
                <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-auto">
                  <pre className="text-sm text-zinc-800 dark:text-zinc-200 font-mono">
{`# Create a worktree
git worktree add ../project-feature-a feature-a

# Launch Claude in the worktree
cd ../project-feature-a && claude

# Clean up when done
git worktree remove ../project-feature-a`}
                  </pre>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-white mb-2">Tips for Effective Workflows</h3>
                <ul className="space-y-2">
                  {[
                    "Use descriptive names for worktrees",
                    "Keep one terminal per worktree",
                    "Setup desktop notifications for Claude input requests",
                    "Use separate IDE windows for different worktrees",
                    "Clean up worktrees when work is complete"
                  ].map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5">•</span>
                      <span className="text-base text-zinc-700 dark:text-zinc-300">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Claude Code Features */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              Claude Code Features
            </h2>
            <div className="space-y-4">
              {[
                { title: "Custom Slash Commands", desc: "Define reusable command templates in .claude/commands/ for repetitive workflows" },
                { title: "Tool Permissions", desc: "Curate which tools Claude can use via /permissions command for enhanced security" },
                { title: "Desktop Notifications", desc: "Get alerts when Claude needs user input for faster interaction" },
                { title: "Git Integration", desc: "Use Claude to manage git operations, resolve conflicts, and review changes" },
                { title: "Plan Mode", desc: "Press Shift+Tab to switch into planning mode for architecting solutions before coding" },
                { title: "Context Management", desc: "Use /reset command to keep context focused during long development sessions" }
              ].map((feature, index) => (
                <div key={index} className="border-l-4 border-blue-600 dark:border-blue-400 pl-4">
                  <h3 className="font-semibold text-black dark:text-white mb-1">{feature.title}</h3>
                  <p className="text-base text-zinc-700 dark:text-zinc-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Getting Help */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              Getting Help
            </h2>
            <p className="text-base text-zinc-700 dark:text-zinc-300">
              For more information about Claude Code features and capabilities:
            </p>
            <ul className="space-y-2">
              <li className="text-base text-zinc-700 dark:text-zinc-300">
                • Use <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm">/help</code> command in Claude Code for built-in help
              </li>
              <li className="text-base text-zinc-700 dark:text-zinc-300">
                • Check the <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm">CLAUDE.md</code> file for project-specific guidance
              </li>
              <li className="text-base text-zinc-700 dark:text-zinc-300">
                • View the project README for additional context and roadmap
              </li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="text-sm text-zinc-600 dark:text-zinc-500 border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <p>Built with Next.js 16 and Tailwind CSS • Powered by Claude AI</p>
        </div>
      </main>
    </div>
  );
}
