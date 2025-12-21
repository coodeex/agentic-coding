import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto('/');
  });

  test('should load the home page', async ({ page }) => {
    // Check that the page loads successfully
    await expect(page).toHaveTitle(/Create Next App/);
  });

  test('should display the main heading', async ({ page }) => {
    // Check the main heading is visible
    const heading = page.getByRole('heading', { name: 'Agentic Coding' });
    await expect(heading).toBeVisible();
  });

  test('should display the project description', async ({ page }) => {
    // Check the description text is present
    const description = page.getByText(/Exploring how Claude can be used as an AI coding agent/);
    await expect(description).toBeVisible();
  });

  test('should have About This Project section', async ({ page }) => {
    // Check the About section heading
    const aboutHeading = page.getByRole('heading', { name: 'About This Project' });
    await expect(aboutHeading).toBeVisible();
  });

  test('should have Key Capabilities section', async ({ page }) => {
    // Check the Key Capabilities heading
    const capabilitiesHeading = page.getByRole('heading', { name: 'Key Capabilities' });
    await expect(capabilitiesHeading).toBeVisible();
  });

  test('should display all capability items', async ({ page }) => {
    // Check that all capability items are visible
    const capabilities = [
      'Automated issue analysis and implementation',
      'Custom slash commands for repetitive workflows',
      'Daily session logging and automated commits',
      'Parallel task execution with git worktrees',
      'Desktop notifications for Claude input requests',
      'Test-driven development workflows'
    ];

    for (const capability of capabilities) {
      const item = page.getByText(new RegExp(capability, 'i'));
      await expect(item).toBeVisible();
    }
  });

  test('should have Get Started section with buttons', async ({ page }) => {
    // Check the Get Started heading
    const getStartedHeading = page.getByRole('heading', { name: 'Get Started' });
    await expect(getStartedHeading).toBeVisible();

    // Check for GitHub link button
    const githubLink = page.getByRole('link', { name: /View on GitHub/i });
    await expect(githubLink).toBeVisible();

    // Check for Documentation link button
    const docLink = page.getByRole('link', { name: /Read Documentation/i });
    await expect(docLink).toBeVisible();
  });

  test('should have footer with build info', async ({ page }) => {
    // Check the footer content
    const footer = page.getByText(/Built with Next.js 16 and Tailwind CSS/);
    await expect(footer).toBeVisible();
  });

  test('should have correct link attributes on GitHub link', async ({ page }) => {
    // Check GitHub link opens in new tab
    const githubLink = page.getByRole('link', { name: /View on GitHub/i });
    await expect(githubLink).toHaveAttribute('target', '_blank');
    await expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
