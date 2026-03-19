import { expect, test } from '@playwright/test';

test('home page renders core sections', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: /Robin's Taxi/i })).toBeVisible();
  await expect(page.locator('#about')).toBeVisible();
  await expect(page.locator('#footer')).toBeVisible();
});

test('services section lists all advertised services', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('#services')).toBeVisible();
  await expect(page.getByRole('heading', { name: /Airport Transfers/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Local Taxi/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Long Distance/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Sightseeing/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Parties/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Medical/i })).toBeVisible();
});

test('reservation form is present and requires mandatory fields', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('#reservation')).toBeVisible();
  await expect(page.locator('form[aria-label="Ride reservation form"]')).toBeVisible();

  // Submit without filling anything – should NOT show success banner
  await page.getByRole('button', { name: /Request My Ride/i }).click();
  await expect(page.locator('.booking-success')).not.toBeVisible();
});

test('reservation form submits successfully with valid data', async ({ page }) => {
  await page.goto('/');

  await page.fill('#fullName', 'Jane Smith');
  await page.fill('#phone', '845-555-0100');
  await page.fill('#email', 'jane@example.com');
  await page.selectOption('#serviceType', 'airport');
  await page.fill('#pickup', '86 Cottage Street, Middletown NY');
  await page.fill('#dropoff', 'JFK Airport, Queens NY');
  await page.fill('#rideDate', '2099-12-31');
  await page.fill('#rideTime', '08:00');
  await page.selectOption('#passengers', '2');

  await page.getByRole('button', { name: /Request My Ride/i }).click();

  await expect(page.locator('.booking-success')).toBeVisible();
  await expect(page.locator('.booking-success')).toContainText('Jane Smith');
});

test('navigation includes Services and Book Now links', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('navigation', { name: /Main navigation/i })
    .getByRole('link', { name: /Services/i })).toBeVisible();
  await expect(page.getByRole('navigation', { name: /Main navigation/i })
    .getByRole('link', { name: /Book Now/i })).toBeVisible();
});
