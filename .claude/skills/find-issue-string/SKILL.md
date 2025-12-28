# find-issue-string

Find a GitHub issue by title and generate a formatted string with the issue number and git user.

## Usage

```
/find-issue-string <issue-title>
```

## Arguments

- `issue-title` (required): The title or partial title of the GitHub issue to search for

## Examples

```bash
/find-issue-string "Git Worktrees"
/find-issue-string "Add Docs for Git Worktrees"
/find-issue-string "OAuth2"
```

## Output

Returns a formatted string in the pattern: `${gitUser}/issue-${sanitizedIssueTitle}-${issueNumber}`

Where:
- `gitUser` is the git user from `git config user.name`
- `sanitizedIssueTitle` is the issue title converted to lowercase with spaces replaced by hyphens
- `issueNumber` is the GitHub issue number

## Example Output

```
coodeex/issue-add-docs-for-git-worktrees-with-claude-code-integration-3
```

## Implementation

1. Get git user name from `git config user.name`
2. Search for the GitHub issue using `gh issue list --repo coodeex/agentic-coding --search "<issue-title>"`
3. Extract the issue number and title from search results
4. Sanitize the title by converting to lowercase and replacing spaces with hyphens
5. Format and output the final string
