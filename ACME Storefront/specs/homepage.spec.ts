import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});

test.describe('Homepage Navigation', () => {
  test('should allow me to land on home page', async ({ page }) => {
    });

});
