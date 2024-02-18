import { test, expect } from '@playwright/test';

test.describe('Testing the web app', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('The web app should load correctly', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Click web!' });

    await expect(button).toBeVisible();
  });
});
