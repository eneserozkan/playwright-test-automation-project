import { test, expect } from '../../fixtures/pomFixtures';
import checkoutData from '../../data/alisveris_verisi.json';
import { faker } from '@faker-js/faker';

test.describe('Checkout Flow with Dynamic Data', () => {

    test('Should complete purchase with Random User', async ({ loginPage, checkoutPage, page }) => {
        
        // 2. Create random data
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const zipCode = faker.location.zipCode();

        console.log(`Test Edilen Müşteri: ${firstName} ${lastName}`);

        await loginPage.goToURL();
        await loginPage.login('standard_user', 'secret_sauce');
        
        await checkoutPage.isAddToCartBtnVisible();
        await checkoutPage.clickAddToCartBtn();
        await checkoutPage.goToCartPage();
        await checkoutPage.checkOutForm();
        
        await checkoutPage.fillForm(firstName, lastName, zipCode);
        
        await checkoutPage.result();
    });
});