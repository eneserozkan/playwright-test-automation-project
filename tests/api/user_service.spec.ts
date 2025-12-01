import { test, expect } from '@playwright/test';

test.describe('User Management API Service', () => {

    test('POST - Create User and Verify Response', async ({ request }) => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        
        const payload = {
            title: "Playwright Automation",
            body: "Testing CI/CD Pipeline",
            userId: 1
        };

        const response = await request.post(url, {
            data: payload,
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        });

        expect(response.status()).toBe(201);
        
        const responseBody = await response.json();
        console.log('API Cevabı:', responseBody);

        expect(responseBody.title).toBe(payload.title);
        expect(responseBody.body).toBe(payload.body);
        expect(responseBody.id).toBeDefined();
    });

});