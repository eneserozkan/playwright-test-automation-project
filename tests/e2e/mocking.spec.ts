import { test, expect } from '@playwright/test';

test.describe('Network Mocking & Interception', () => {

    // Success State
    test('Show Fake Fruits (200 OK)', async ({ page }) => {
        
        await page.route('*/**/api/v1/fruits', async route => {
            const sahteMeyveler = [
                { name: 'Trabzon Hurması', id: 1 },
                { name: 'Amasya Elması', id: 2 },
                { name: 'Anamur Muzu', id: 3 }
            ];

            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(sahteMeyveler)
            });
        });

        await page.goto('https://demo.playwright.dev/api-mocking');

        // Kontrol: Sahte meyve geldi mi?
        await expect(page.getByText('Trabzon Hurması')).toBeVisible();
        
        // Kontrol: Gerçek meyve gelmemeli
        await expect(page.getByText('Strawberry')).not.toBeVisible();
    });


    // SENARYO 2: Hata Durumu (500 Error)
    test('Senaryo 2: Sunucu Hatası Simülasyonu (500 Error)', async ({ page }) => {
        
        await page.route('*/**/api/v1/fruits', async route => {
            // Sadece hata dönüyoruz.
            await route.fulfill({
                status: 500,
                contentType: 'application/json',
                body: JSON.stringify({ error: "Server Error" })
            });
        });

        await page.goto('https://demo.playwright.dev/api-mocking');

        const fruitList = page.locator('ul > li');
        await expect(fruitList).toHaveCount(0);
    });

});