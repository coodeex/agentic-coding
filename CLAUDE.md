# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an agentic coding project exploring how Claude can be used as an AI coding agent. It currently contains a Next.js 16 client application as the main deliverable. The project emphasizes automation, workflow optimization, and exploring agentic patterns in development.

## Principles

- **Test-Driven Development**: Write failing tests first, then write the code to pass the tests.

## Project Structure

```
agentic-coding/
├── client/                 # Next.js 16 application
│   ├── src/app/           # Next.js app directory with React components
│   ├── public/            # Static assets
│   └── package.json       # Dependencies and build scripts
├── .claude/               # Claude Code configuration
│   ├── commands/          # Custom slash commands
│   └── settings.json      # Tool permissions and hooks
├── logs/                  # Daily session logs (generated)
└── README.md              # Project notes and ideas
```

## Key Technologies

- **Next.js 16** with TypeScript
- **React 19** for UI
- **Tailwind CSS 4** with PostCSS for styling
- **ESLint 9** for linting

## Development Commands

### Client Application

```bash
# Navigate to client directory
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
pnpm lint -- --fix
```

### Git & Logging

A custom `/log-commit-push` command is available for automated workflow:
- Stages all changes
- Appends a summary to the daily log file (`logs/YYYY-MM-DD.md`)
- Generates and commits with a concise commit message
- Pushes to remote

Usage: `/log-commit-push`

## Architecture Notes

### Next.js App Structure

The client uses Next.js 13+ app directory pattern:
- **`src/app/layout.tsx`**: Root layout with global styles (Tailwind CSS with dark mode support)
- **`src/app/page.tsx`**: Home page component

The layout applies global Tailwind styles and uses Next.js 16's built-in dark mode support. Components use Tailwind's utility classes for styling.

### Styling Approach

- **Tailwind CSS 4**: Full utility-first CSS framework
- **Dark mode**: Configured in the layout with `dark:` prefix support
- **PostCSS**: Used for Tailwind processing
- **No CSS modules** currently in use—all styling via Tailwind classes

## Development Workflow

### Recommended Process

1. **Make changes** to the codebase
2. **Run locally** with `npm run dev`
3. **Lint and fix** with `npm run lint -- --fix`
4. **Verify changes** with the development server
5. **Use `/log-commit-push`** to automate commit and push

### Code Quality

- Run linting before committing
- Use TypeScript types for type safety
- Follow Next.js and React 19 best practices
- Keep components focused and modular

## Claude Code Features Being Used

- **Custom slash commands**: `/log-commit-push` for automation
- **Desktop notifications**: Enabled in settings.json for input requests
- **Tool restrictions**: Currently only `Edit` tool is allowed (see `.claude/settings.json`)
- **Hooks**: Desktop notification hook configured for when Claude awaits user input
- **Specialized agents**: 
  - `test-quality-guardian` - Use BEFORE implementing features/fixes to write failing tests first
  - `test-maintenance-agent` - Use AFTER code changes to fix broken tests and maintain suite health

To adjust tool permissions, use `/permissions` command.

## Important Notes

- The project is in exploratory phase with focus on agentic patterns
- Daily logs are generated in `logs/` directory with timestamps
- Use `/reset` to clear context in long sessions
- Multiple Claude instances can work in parallel using git worktrees
- Notifications alert when Claude needs user input


# run-tests

Run unit and e2e tests with options for coverage and specific test files.

## Test Structure

The project contains two types of tests:

### Unit Tests (Jest)
- **Location**: `client/src/**/__tests__/*.test.tsx`
- **Count**: 18 tests across 3 test suites
- **Framework**: Jest with React Testing Library
- **Coverage**: Tests for layout, home page, and docs page

### E2E Tests (Playwright)
- **Location**: `tests/example.spec.ts`
- **Count**: 9 tests × 3 browsers (27 total)
- **Browsers**: Chromium, Firefox, WebKit
- **Framework**: Playwright Test
- **Focus**: Home page UI verification and interactions

## Usage

```
/run-tests [type] [options]
```

## Arguments

- `type` (optional): Test type to run
  - `unit` - Run Jest unit tests only
  - `e2e` - Run Playwright e2e tests (all browsers)
  - `all` - Run both unit and e2e tests (default)

- `options` (optional):
  - `--coverage` - Include coverage report (unit tests only)
  - `--watch` - Run in watch mode (unit tests only)
  - `--ui` - Run e2e tests in UI mode
  - `--debug` - Run e2e tests with debugger
  - `--chromium` - Run e2e tests on Chromium only
  - `--firefox` - Run e2e tests on Firefox only
  - `--webkit` - Run e2e tests on WebKit only

## Examples

```bash
/run-tests unit
/run-tests e2e
/run-tests e2e --ui
/run-tests all --coverage
/run-tests unit --watch
/run-tests e2e --chromium
/run-tests e2e --debug
```

## Implementation

Run the appropriate test command from the correct directory:

```bash
# Unit tests (from client directory)
cd client && pnpm test

# Unit tests with coverage
cd client && pnpm test:coverage

# Unit tests in watch mode
cd client && pnpm test:watch

# Unit tests for CI environment
cd client && pnpm test:ci

# E2E tests (all browsers - from root directory)
pnpm e2e

# E2E tests on specific browser
pnpm e2e:chromium
pnpm e2e:firefox
pnpm e2e:webkit

# E2E tests in UI mode
pnpm e2e:ui

# E2E tests with debugger
pnpm e2e:debug
```

## Test Results to Report

When running tests, report:
- Number of tests passed/failed for each suite
- Total test count (unit + e2e)
- Coverage percentage (if requested)
- Browser coverage for e2e tests
- Any test failures or warnings
- Total execution time
