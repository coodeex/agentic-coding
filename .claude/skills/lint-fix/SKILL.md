# lint-fix

Check and fix code quality issues with ESLint across the project.

## Usage

```
/lint-fix [action] [scope]
```

## Arguments

- `action` (optional): Action to perform
  - `check` - Report linting errors without fixing
  - `fix` - Automatically fix fixable issues (default)

- `scope` (optional): What to lint
  - `client` - Lint only the client application
  - `all` - Lint entire project (default)

## Examples

```bash
/lint-fix
/lint-fix fix client
/lint-fix check all
/lint-fix fix
```

## Implementation

ESLint is configured in the client directory. Run:

```bash
# Check for issues
cd client && pnpm lint

# Fix issues automatically
cd client && pnpm eslint . --fix
```

Report on:
- Number of files checked
- Issues found (errors and warnings)
- Issues fixed
- Any remaining issues that require manual fixes
- Recommendations for code improvements
