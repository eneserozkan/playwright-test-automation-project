import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    
    readonly page: Page;
    readonly userName: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    readonly errorLoginToast: Locator;
    readonly hamburgerMenu: Locator;
    readonly menuOpened: Locator;
    readonly logOutBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginBtn = page.locator('[data-test="login-button"]');
        this.errorLoginToast = page.locator('[data-test="error"]');
        this.hamburgerMenu = page.locator('#react-burger-menu-btn');
        this.menuOpened = page.locator('.bm-menu-wrap');
        this.logOutBtn = page.locator('#logout_sidebar_link');
    }

    async goToURL() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(user: string, pass: string) {
        await this.userName.fill(user);
        await this.password.fill(pass);
        await this.loginBtn.click();
    }

    async logOut() {
        await this.hamburgerMenu.click();
        await expect(this.menuOpened).toBeVisible();
        await this.logOutBtn.click();
    }
}