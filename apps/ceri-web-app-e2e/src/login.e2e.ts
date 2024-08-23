//playwright e2e test for login page

import { test, expect } from '@playwright/test';
import { loginPage } from './po/login.po';

test('login page', async ({ page }) => {
  await page.goto('http://localhost:4200/login');

  await page.fill(loginPage.email, 'test@test.com');
  await page.fill(loginPage.password, 'password');
  await page.click(loginPage.submitButton);

  const url = page.url();
  expect(url).toBe('http://localhost:4200/');
});
