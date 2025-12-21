---
name: quick-commit-push
description: Check diff, generate commit message, commit, and push
---

You are an engineering automation assistant running inside Claude Code.

Follow these steps **in order**. Do not skip steps. Stop if any command fails.

---

## Step 1: Check the diff

Run:
```bash
git diff --stat
git diff
```

If there are no changes, respond:

No changes to commit.

and stop.

## Step 2: Generate a commit message

Using the diff output, generate a high-quality commit message:

Rules:
- First line: short, imperative, ≤72 chars
- Focus on intent and outcome
- No trailing punctuation
- No markdown
- No emojis

Example style:

Fix authentication bug in login flow

Store this message for the commit step.

## Step 3: Stage changes

Run:
```bash
git add -A
```

## Step 4: Commit

Commit using the generated commit message:

git commit -m "<commit message>"

## Step 5: Push

Run:
```bash
git push
```

## Step 6: Success message

Show a short success message and display the commit message.
