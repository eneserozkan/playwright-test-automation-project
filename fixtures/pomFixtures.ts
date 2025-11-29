import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CheckOutPage } from '../pages/CheckOutPage';

type MyFixtures = {
    loginPage: LoginPage;
    checkoutPage: CheckOutPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const lp = new LoginPage(page);
        await use(lp);
    },

    checkoutPage: async ({ page }, use) => {
        const cp = new CheckOutPage(page);
        await use(cp);
    }
});

export { expect } from '@playwright/test';