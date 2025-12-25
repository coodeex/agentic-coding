import { test, expect } from '@playwright/test';

test.describe('Authentication UI', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto('/');
  });

  test('should display sign in section when not authenticated', async ({ page }) => {
    // Check that the sign-in section is visible
    const signInSection = page.getByText(/Sign In to Continue/);
    await expect(signInSection).toBeVisible();
  });

  test('should display sign in with Google button', async ({ page }) => {
    // Check the sign-in button is visible and has correct text
    const signInButton = page.getByRole('button', { name: /Sign in with Google/i });
    await expect(signInButton).toBeVisible();
  });

  test('sign in button should be clickable', async ({ page }) => {
    // Get the sign-in button
    const signInButton = page.getByRole('button', { name: /Sign in with Google/i });

    // Check button is enabled
    await expect(signInButton).toBeEnabled();
  });

  test('sign in button should have proper styling', async ({ page }) => {
    // Get the sign-in button
    const signInButton = page.getByRole('button', { name: /Sign in with Google/i });

    // Check that button has expected classes (blue background)
    const buttonClass = await signInButton.getAttribute('class');
    expect(buttonClass).toContain('bg-blue-600');
  });

  test('should display encouragement text for sign in', async ({ page }) => {
    // Check for the call-to-action text
    const ctaText = page.getByText(/Sign in with your Google account to continue/);
    await expect(ctaText).toBeVisible();
  });

  test('sign in section should have blue background styling', async ({ page }) => {
    // Check the sign-in section has blue background
    const signInSection = page.locator('section').filter({
      has: page.getByText(/Sign In to Continue/)
    });

    const sectionClass = await signInSection.getAttribute('class');
    expect(sectionClass).toContain('bg-blue-50');
  });

  test('main page content should still be visible when showing sign in', async ({ page }) => {
    // Check that main content sections are visible alongside sign-in
    const aboutSection = page.getByRole('heading', { name: 'About This Project' });
    await expect(aboutSection).toBeVisible();

    const capabilitiesSection = page.getByRole('heading', { name: 'Key Capabilities' });
    await expect(capabilitiesSection).toBeVisible();
  });

  test('should maintain responsive layout with sign in button', async ({ page }) => {
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });

    const signInButton = page.getByRole('button', { name: /Sign in with Google/i });
    await expect(signInButton).toBeVisible();

    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(signInButton).toBeVisible();

    // Test desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(signInButton).toBeVisible();
  });

  test('sign in section should have proper border styling', async ({ page }) => {
    // Check the sign-in section has blue border
    const signInSection = page.locator('section').filter({
      has: page.getByText(/Sign In to Continue/)
    });

    const sectionClass = await signInSection.getAttribute('class');
    expect(sectionClass).toContain('border-blue-200');
  });

  test('sign in button should have hover effect classes', async ({ page }) => {
    // Get the sign-in button
    const signInButton = page.getByRole('button', { name: /Sign in with Google/i });

    // Check for hover classes
    const buttonClass = await signInButton.getAttribute('class');
    expect(buttonClass).toContain('hover:bg-blue-700');
  });
});
