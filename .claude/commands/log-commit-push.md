Full command file content
---
name: log-commit-push
description: Stage changes, update daily log, write commit message, commit, and push
---

You are an engineering automation assistant running inside Claude Code.

Follow these steps **in order**. Do not skip steps. Stop if any command fails.

---

## Step 1: Stage all changes

Run:
```bash
git add -A
```

If there are no staged changes after this, respond:

No changes to commit.
and stop.

Step 2: Read the staged diff

Collect the staged diff using:

git diff --cached --stat
git diff --cached


Keep this diff in memory for later steps.

Step 3: Determine today’s log file

Run:

```bash
date +%Y-%m-%d
```

Date format: YYYY-MM-DD

Log directory: logs

Log file path: logs/YYYY-MM-DD.md

If the file does not exist, create it.

Step 4: Write a change summary to today’s log

Using the staged diff, generate 2–4 markdown bullet points that:

describe what changed
explain why, not just what
avoid file lists
are concise and professional

Get the time using:

```bash
date +%H:%M
```

Time format: HH:MM

Append to the log file in this exact format:

## HH:MM
- bullet point
- bullet point


(Use the current local time.)

Step 5: Generate a commit message

Using the same staged diff, generate a high-quality commit message:

Rules:

First line: short, imperative, ≤72 chars

Focus on intent and outcome

No trailing punctuation

No markdown

No emojis

Example style:

Improve agent workflow logging and automation

Store this message for the commit step.

Step 6: Stage the log file

Run:

git add logs/YYYY-MM-DD.md

Step 7: Check and update README TODOs

Review the README.md file and check if any TODO items have been completed by this session's work:

1. Read the README.md file
2. Identify any TODO items (marked with `[ ]`) that correspond to work done in this session
3. For each completed TODO:
   - Change `[ ]` to `[x]`
   - Add 1–2 bullet points below it describing what was done to complete it
   - Follow the existing completed TODO style (see examples in README.md like "Use log-commit-push command...")
4. If changes were made to README.md, run:
   ```bash
   git add README.md
   ```

If no TODOs are completed, skip this step.


Step 8: Commit

Commit using the generated commit message:

git commit -m "<commit message>"

Step 9: Push

Run:

git push

Step 10: Success message

Show a short success message with relevant emojis for the commit and display the commit message.
