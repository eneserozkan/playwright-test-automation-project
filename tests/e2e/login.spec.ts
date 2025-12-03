import { test, expect } from '../../fixtures/pomFixtures';

test('Successful Login with Valid Credentials', async ({ loginPage, page }) => {
    await loginPage.goToURL();

    const username = process.env.SAUCE_USERNAME as string;
    const password = process.env.SAUCE_PASSWORD as string;
    await loginPage.login(username, password);
    await expect(page).toHaveURL(/inventory.html/);
});