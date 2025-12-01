import { test, expect } from '../../fixtures/pomFixtures';

test.describe('Product Sorting Tests', () => {

    test('Should sort products by Price (low to high)', async ({ loginPage, inventoryPage }) => {
        
        // 1. Login
        await loginPage.goToURL();
        await loginPage.login('standard_user', 'secret_sauce');

        // 2. Change the sorting (Low to High -> 'lohi')
        await inventoryPage.selectSortOption('lohi');

        // 3. Pull the prices in the screen (as number list)
        // Example: [7.99, 9.99, 15.99, 15.99, 29.99, 49.99]
        const currentPrices = await inventoryPage.getPriceList();
        
        console.log('The prices in the screen: ', currentPrices);

        const sortedPrices = [...currentPrices].sort((a, b) => a - b);

        console.log('What should be: ', sortedPrices);

        // Comparise them
        expect(currentPrices).toEqual(sortedPrices);
    });
});