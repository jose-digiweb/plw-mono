import { test, expect } from '@playwright/test';

test.describe('Testing the docs app', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('The docs app should load correctly', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Click docs!' });

    await expect(button).toBeVisible();
  });
});
