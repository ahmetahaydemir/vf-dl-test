import { test, expect } from '@playwright/test';
import cmsData from '../data/cms-al-dev.json'

test('Quicklinks-GigaFibra', async ({ page }) => {
  await page.goto('https://al-homepage.app-dev.digitalretail.vodafone.com/');

  await page.getByTestId('quick-links').getByRole('link', { name: 'GigaFibra' }).click();

  await expect(page).toHaveURL(/.*i_code=/);
});