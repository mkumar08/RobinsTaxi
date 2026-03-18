import { expect, test } from '@playwright/test';

test('home page renders core sections', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: /Robin's Taxi/i })).toBeVisible();
  await expect(page.locator('#about')).toBeVisible();
  await expect(page.locator('#footer')).toBeVisible();
});