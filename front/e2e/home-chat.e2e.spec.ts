import { test, expect } from '@playwright/test';

test.describe('Home Chat', () => {
  test('Peut créer un chat et afficher message + réponse', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    const question = 'Comment gérer le Markdown dans mes messages ?';
    await page.getByPlaceholder('Posez votre question...').fill(question);
    await page.getByTestId('click-button').click();

    await expect(page).toHaveURL(/\/\d+$/);
  });
});
