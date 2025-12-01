import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly sortDropdown: Locator;
    readonly itemPrices: Locator;

    constructor(page: Page) {
        this.page = page;
        
        // Sıralama Menüsü (Dropdown)
        this.sortDropdown = page.locator('.product_sort_container');
        
        // Fiyat Listesi (Birden fazla element dönecek)
        this.itemPrices = page.locator('.inventory_item_price');
    }

    // Sıralama Seçme Fonksiyonu
    // option değerleri: 'az', 'za', 'lohi' (low-high), 'hilo' (high-low)
    async selectSortOption(option: string) {
        await this.sortDropdown.selectOption(option);
    }

    // SAYILARIN SİHİRLİ DÜNYASI 🪄
    // Bu fonksiyon ekrandaki fiyatları alır, temizler ve sayı listesi olarak verir.
    async getPriceList(): Promise<number[]> {
        // 1. Tüm fiyat elementlerinin içindeki yazıları al (['$7.99', '$15.99'...])
        const priceTexts = await this.itemPrices.allInnerTexts();

        // 2. Her bir yazıyı sayıya çevir
        // map() fonksiyonu döngü gibidir, hepsini tek tek işler.
        const prices = priceTexts.map(text => {
            // '$' işaretini sil ve boşluğa çevir, sonra sayıya (parseFloat) dönüştür.
            return parseFloat(text.replace('$', ''));
        });

        return prices;
    }
}