import { test, expect } from '../../fixtures/pomFixtures';

test.describe('Visual Regression Tests', () => {

    test('Login Page Visual Check', async ({ loginPage, page }) => {
        // 1. Sayfaya git
        await loginPage.goToURL();

        // 2. Sayfanın tamamen yüklendiğinden emin ol (Gerekirse)
        await expect(page).toHaveTitle(/Swag Labs/);

        // 3. FOTOĞRAFI ÇEK VE KARŞILAŞTIR 📸
        // İlk çalışmada: Referans fotoğrafı çeker ve kaydeder.
        // Sonraki çalışmalarda: Yeni çektiğiyle eskisini piksel piksel kıyaslar.
        await expect(page).toHaveScreenshot('login-page-snapshot.png', {
            maxDiffPixels: 100, // 100 piksele kadar olan farkları görmezden gel (Opsiyonel tolerans)
        });
    });
});