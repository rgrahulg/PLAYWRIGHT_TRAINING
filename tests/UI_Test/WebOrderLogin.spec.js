import { test, expect } from '@playwright/test';

test.skip('test @sanity', async ({ page }) => {
  await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx');
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill('Tester');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('test');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});