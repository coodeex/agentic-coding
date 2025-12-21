# run-tests

Run unit and e2e tests with options for coverage and specific test files.

## Usage

```
/run-tests [type] [options]
```

## Arguments

- `type` (optional): Test type to run
  - `unit` - Run Jest unit tests
  - `e2e` - Run Playwright e2e tests
  - `all` - Run both unit and e2e tests (default)

- `options` (optional):
  - `--coverage` - Include coverage report
  - `--watch` - Run in watch mode (unit tests only)
  - `--ui` - Run e2e in UI mode
  - `--debug` - Run e2e with debugger

## Examples

```bash
/run-tests unit
/run-tests e2e --ui
/run-tests all --coverage
/run-tests unit --watch
```

## Implementation

Run the appropriate test command from the correct directory:

```bash
# Unit tests (run from client directory)
cd client && pnpm test

# Unit tests with coverage (run from client directory)
cd client && pnpm test:coverage

# E2E tests (run from root directory)
cd /path/to/project && pnpm e2e

# E2E tests in UI mode (run from root directory)
cd /path/to/project && pnpm e2e:ui

# E2E tests with debugger (run from root directory)
cd /path/to/project && pnpm e2e:debug
```

Check test results and report on:
- Number of tests passed/failed
- Coverage percentage (if requested)
- Any test failures or warnings
- Test execution time
