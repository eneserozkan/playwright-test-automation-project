import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  // Testleri paralel çalıştır (Hız için)
  fullyParallel: true,
  
  // CI ortamında (Github Actions vs) 'only' unutulursa hata ver
  forbidOnly: !!process.env.CI,
  
  // Hata alırsan kaç kere daha deneyeyim?
  // CI ise 2 kere dene, Localde (senin bilgisayarın) deneme (0).
  retries: process.env.CI ? 2 : 0,
  
  // Raporlama tipi
  reporter: 'html',

  // --- ASIL AYARLAR BURADA ---
  use: {
    // 1. ANA ADRESİMİZ (Artık testlerde uzun uzun yazmayacağız)
    baseURL: 'https://www.saucedemo.com',

    // 2. GÖRÜNÜRLÜK AYARI
    // false = Tarayıcıyı görerek çalıştır.
    // true = Arka planda gizli çalıştır (Hızlıdır ama göremezsin).
    headless: false,

    // 3. EKRAN BOYUTU (Standart HD olsun)
    viewport: { width: 1280, height: 720 },

    // 4. EKRAN GÖRÜNTÜSÜ (Screenshot)
    // 'only-on-failure': Sadece test patlarsa resim çek.
    screenshot: 'only-on-failure',

    // 5. VİDEO KAYDI
    // 'retain-on-failure': Test geçerse videoyu sil, kalırsa kaydet (Disk dolmasın diye).
    video: 'retain-on-failure',

    // 6. KARA KUTU (TRACE)
    // Test patlarsa tüm logları tut. (Buna sonra detaylı bakacağız)
    trace: 'retain-on-failure',
  },

  // --- TARAYICILAR ---
  projects: [
    {
      name: 'chromium', // Chrome / Edge
      use: { ...devices['Desktop Chrome'] },
    },
    // Şimdilik diğerlerini yorum satırı yapıyorum ki hızlı çalışsın.
    // İleride açabilirsin.
    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit', // Safari
      use: { ...devices['Desktop Safari'] },
    },
    */
  ],
});