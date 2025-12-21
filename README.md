## Agentic Coding

This is a collection of notes and ideas about agentic coding with Claude.



## TODO

- [x] Use log-commit-push command to log session work into daily log file, create a commit message and push to remote
  - Implemented `/log-commit-push` command for automated daily logging, commit, and push workflow
  - Added `.claude/commands/log-commit-push.md` with step-by-step automation
- [x] Create claude settings
  - Added `.claude/settings.json` with notification hook configuration
  - Desktop notifications enabled for user alerts when input is needed
- [x] Initialise the project with nextjs 16 quickly
- [x] Create CLAUDE.md file
  - Added `CLAUDE.md` with comprehensive project guidance for future Claude instances
  - Documented project structure, development commands, and architecture patterns
- [x] Create github project with issues and try out if claude can pick up the issue, plan and implement the solution. Use a custom slash command to trigger this.
  - Created `/fix-github-issue` custom slash command for automated GitHub issue analysis and fixing
  - Successfully analyzed and implemented fix for issue #1 (update page.tsx to reflect project scope)
  - Command uses `gh issue view` to get details, implements changes, runs linting/build, and creates commits
- [x] Try common workflow: b. Write tests, commit; code, iterate, commit. This involves creating sub agents to handle different tasks.
  - Set up Jest testing infrastructure with Next.js and React Testing Library
    - Added ESLint Jest plugin for test file linting rules
    - Created jest.config.ts with jsdom test environment and coverage support
    - Added test scripts: `npm test`, `test:watch`, `test:coverage`, `test:ci`
    - Implemented initial test files for layout and pages with React Testing Library
  - Added Playwright e2e testing framework and CI/CD integration
    - Created playwright.config.ts with multi-browser setup (Chromium, Firefox, WebKit)
    - Set up GitHub Actions workflow for automated test execution on push and PRs
    - Added example Playwright test spec with HTML reporting
  - Configured and verified Playwright e2e tests for Next.js client. Run in the CI with the `[e2e]` flag in the commit message or PR description.
    - Enabled baseURL and webServer configuration to auto-start dev server on port 3000
    - Added npm scripts for running e2e tests: `pnpm e2e`, `pnpm e2e:ui`, `pnpm e2e:debug`, and browser-specific variants
    - Implemented comprehensive home page test suite with 9 test cases covering all sections
    - Verified all tests passing successfully across chromium browser
    - Configured GitHub Actions workflow to run e2e tests only when `[e2e]` flag is present in commit message or PR description!!
- [ ] Create a workflow to automate PR needs to be reviewed and merged to dev branch.
- [ ] Use git worktrees
  - This approach shines.
  - Lightweight approach to multiple checkouts
  - Create worktrees: 		 worktree add ../project-feature-a feature-a
  - Launch Claude in each worktree: 		cd ../project-feature-a && claude
  - Create additional worktrees as needed (repeat steps 1-2 in new terminal tabs)
  - Some tips:
    - use good names
    - one terminal per worktree
    - setup notifications when Claude needs attention
    - use separate IDE windows for different worktrees
    - clean up the worktree when done: 	git worktree remove ../project-feature-a

- [x] Configure a desktop notification when there is a notification from claude waiting for my input.
- [ ] If there is going to be a DB in this project, try to create a local database sub agent that can pull data from the local database. This could look into the prisma files to understand the schema and then use postgres MCP etc way to pull data from the database.
- [ ] Use headless mode to automate running claude in the CI, local scripts and pre-commit hooks. Just use the -p flag to enable headless mode



## Notes about Claude code

#### Allowed tools
- Curate Claude's list of allowed tools
- Use the /permissions command after starting Claude Code to add or remove tools from the allowlist

#### Use custom slash commands
- For repeated workflows—debugging loops, log analysis, etc.—store prompt templates in Markdown files within the .claude/commands folder
- Custom slash commands can include the special keyword $ARGUMENTS to pass parameters from command invocation.

#### Git support
- You can use Claude to interact with git.
- Ask who made this change, revert files and resolve merge conflicts.

#### Specific instructions
- Be specific in your instructions. Actually write exactly what should be done instead of keeping instructions vague.

#### Image support
- Paste image to the terminal, drag and drop image, provide file path for images

#### Tab completion
- Use tab-completion to quickly reference files or folders anywhere in your repository

#### Visit internet
- Give Claude URLs

#### Plan Mode
- You can switch into Plan Mode during a session using Shift+Tab to cycle through

#### Resetting context
- You can use /reset to reset the context window

#### Thinking
- You can say to think more / ultrathink

#### Course correct early and often
- Ask Claude to make a plan
- Press Escape to interrupt Claude during any phase. Context will preserve but this allows correcting the course anytime
- Double-tap Escape to jump back in history, edit a previous prompt, and explore a different direction. You can edit the prompt and repeat until you get the result you're looking for.
- Ask Claude to undo changes, often in conjunction with option #2 to take a different approach.

#### Use /reset to keep context focused
- in long sessions, resetting the context window helps to keep Claude focused

Example: One Claude writes code, another Claude reviews the code
- use Claude to write code
- /reset
- review the code, write the review somewhere?
- /reset
- read both the code and the review and this claude would edit the code based on the feedback

###### RULE of thumb: one Claude does one thing

#### Use checklists and scratchpads for complex workflows
- Claude should be able to use a markdown file or github issue as a checklist or scratchpad
- Ask to make a plan first, like run a lint command to find all errors and create a markdown file. Then fix issues one by one, verify it's fixed, mark it as fixed and move on to the next one

#### Pass data into Claude
- copy and paste data into claude
- pipe with cat file.txt | claude
- instruct claude to pull data with commands
- ask claude to read files

#### Sub agents
- create: run /agents, and select create
- generate with claude and refine later

#### Building with Claude
- subagents
- plugins
- agent skills
- hooks
- headless mode
- MCP





## References

- https://code.claude.com/docs
- https://www.anthropic.com/engineering/claude-code-best-practices

































