import { test, expect } from '@playwright/test';

test.describe('User Management API Service', () => {

    test('POST - Create User and Verify Response', async ({ request }) => {
        const payload = {
            name: "Samual",
            job: "QA Engineer"
        };

        const response = await request.post('https://reqres.in/api/users', {
            data: payload,
            headers: { 'Content-Type': 'application/json' }
        });

        expect(response.status()).toBe(201);
        
        const responseBody = await response.json();
        expect(responseBody.name).toBe(payload.name);
        expect(responseBody.job).toBe(payload.job);
        expect(responseBody.id).toBeDefined();
    });

});