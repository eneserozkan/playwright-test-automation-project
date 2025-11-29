import { test, expect } from '../../fixtures/pomFixtures';

test('Successful Login with Valid Credentials', async ({ loginPage, page }) => {
    await loginPage.goToURL();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/);
});