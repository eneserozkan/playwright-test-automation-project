import { Page, Locator, expect } from '@playwright/test';

export class CheckOutPage {

    readonly page: Page;
    readonly addToCart: Locator;
    readonly cartBadge: Locator;
    readonly goToCart: Locator;
    readonly cartItem: Locator;
    readonly checkOutBtn: Locator;
    readonly formLoaded: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;
    readonly continueBtn: Locator;
    readonly summaryInfo: Locator;
    readonly finishBtn: Locator;
    readonly completeHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        
        this.addToCart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.goToCart = page.locator('[data-test="shopping-cart-link"]');
        this.cartItem = page.locator('.cart_item');
        this.checkOutBtn = page.locator('#checkout');
        this.formLoaded = page.locator('.checkout_info');
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.postalCode = page.getByPlaceholder('Zip/Postal Code');
        this.continueBtn = page.locator('#continue');
        this.summaryInfo = page.locator('.summary_info');
        this.finishBtn = page.locator('#finish');
        this.completeHeader = page.locator('.complete-header');
    }

    async isAddToCartBtnVisible() {
        await expect(this.addToCart).toBeVisible();
    }

    async clickAddToCartBtn() {
        await this.addToCart.click();
        await expect(this.cartBadge).toBeVisible();
    }

    async goToCartPage() {
        await this.goToCart.click();
        await expect(this.cartItem).toBeVisible();
    }

    async checkOutForm() {
        await this.checkOutBtn.click();
        await expect(this.formLoaded).toBeVisible();
    }

    async fillForm(ad: string, soyad: string, postaKodu: string) {
        await this.firstName.fill(ad);
        await this.lastName.fill(soyad);
        await this.postalCode.fill(postaKodu);
        await this.continueBtn.click();
        await expect(this.cartItem).toBeVisible();
        await expect(this.summaryInfo).toBeVisible();
    }

    async result() {
        await this.finishBtn.click();
        await expect(this.completeHeader).toContainText('Thank you');
    }
}