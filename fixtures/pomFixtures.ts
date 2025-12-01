import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CheckOutPage } from '../pages/CheckOutPage';
import { InventoryPage } from '../pages/InventoryPage';

type MyFixtures = {
    loginPage: LoginPage;
    checkoutPage: CheckOutPage;
    inventoryPage: InventoryPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const lp = new LoginPage(page);
        await use(lp);
    },

    checkoutPage: async ({ page }, use) => {
        const cp = new CheckOutPage(page);
        await use(cp);
    },

    inventoryPage: async ({ page }, use) => {
        const inpage = new InventoryPage(page);
        await use(inpage)
    }
});

export { expect } from '@playwright/test';