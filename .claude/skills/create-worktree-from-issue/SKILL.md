# create-worktree-from-issue

Create a new git worktree and branch from a GitHub issue title. Automatically generates formatted branch name and navigates to the new worktree.

## Usage

```
/create-worktree-from-issue <issue-title>
```

## Arguments

- `issue-title` (required): The title or partial title of the GitHub issue to create the worktree from

## Examples

```bash
/create-worktree-from-issue "Git Worktrees"
/create-worktree-from-issue "Add Docs for Git Worktrees with Claude Code Integration"
/create-worktree-from-issue "OAuth2 authentication"
```

## What It Does

1. **Find the Issue**: Searches for the GitHub issue by title using `gh issue list`
2. **Generate Formatted String**: Creates a string in the pattern `${gitUser}/issue-${sanitizedIssueTitle}-${issueNumber}`
3. **Create Worktree**: Creates a new git worktree with the formatted branch name
4. **Navigate**: Changes directory to the new worktree so you can start working immediately

## Output

Returns:
- The formatted string used for the branch name
- Confirmation that the worktree was created
- The path to the new worktree
- Confirmation of navigation to the worktree

## Example

Input:
```bash
/create-worktree-from-issue "Add Docs for Git Worktrees with Claude Code Integration"
```

Output:
```
Created worktree: ../agentic-coding-coodeex/issue-add-docs-for-git-worktrees-with-claude-code-integration-3
Branch: coodeex/issue-add-docs-for-git-worktrees-with-claude-code-integration-3
Now in worktree directory, ready to work!
```

## Implementation

1. Get git user name from `git config user.name`
2. Search for the GitHub issue using `gh issue list --repo coodeex/agentic-coding --search "<issue-title>"`
3. Extract issue number and title
4. Sanitize title: lowercase and replace spaces with hyphens
5. Create formatted string: `${gitUser}/issue-${sanitizedIssueTitle}-${issueNumber}`
6. Create git worktree: `git worktree add ../agentic-coding-${formattedString} -b ${formattedString}`
7. Navigate to the new worktree: `cd ../agentic-coding-${formattedString}`

## Notes

- Requires gh CLI to be installed and authenticated
- Requires git 2.7.0+ for worktree support
- The worktree is created as a sibling directory to the main project
- You'll be in the new worktree directory after running this skill
