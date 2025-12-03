import { test, expect } from '../../fixtures/pomFixtures';

test.describe('Visual Regression Tests', () => {

    test('Login Page Visual Check', async ({ loginPage, page }) => {
        // 1. Go to the page
        await loginPage.goToURL();

        // 2. Check title
        await expect(page).toHaveTitle(/Swag Labs/);

        // 3. Take snapshot
        await expect(page).toHaveScreenshot('login-page-snapshot.png', {
            maxDiffPixels: 100, 
        });
    });
});