import { test, expect } from '@playwright/test';

test.describe('Création de chat et envoi de message depuis la Home', () => {
  test('Lance un chat, redirige et affiche le message et la réponse', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    const question = 'Comment gérer le Markdown dans mes messages ?';
    await page.getByPlaceholder('Posez votre question...').fill(question);
    await page.getByTestId('click-button').click();

    await expect(page).toHaveURL(/\/\d+$/);

    await expect(page.getByTestId('message').filter({ hasText: question })).toContainText(
      question,
      { timeout: 15000 }
    );

    await expect(page.getByTestId('message').last()).toContainText(/markdown/i, { timeout: 15000 });
  });
});
