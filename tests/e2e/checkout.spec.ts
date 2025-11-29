import { test, expect } from '../../fixtures/pomFixtures';
import checkoutData from '../../data/alisveris_verisi.json';

test.describe('E-Commerce Checkout Flow', () => {

    for (const customer of checkoutData) {
        
        test(`Should complete purchase for customer: ${customer.ad}`, async ({ loginPage, checkoutPage, page }) => {
            
            // 1. Login Phase
            await loginPage.goToURL();
            await loginPage.login('standard_user', 'secret_sauce');
            
            // Verify login success
            await expect(page).toHaveURL(/inventory.html/);

            // 2. Add to Cart & Navigate
            await checkoutPage.isAddToCartBtnVisible();
            await checkoutPage.clickAddToCartBtn();
            await checkoutPage.goToCartPage();

            // 3. Checkout Process
            await checkoutPage.checkOutForm();
            
            // Fill form with dynamic data from JSON
            await checkoutPage.fillForm(customer.ad, customer.soyad, customer.postaKodu);
            
            // 4. Finalize & Verify
            await checkoutPage.result();
        });
    }
});