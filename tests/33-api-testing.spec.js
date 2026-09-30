// API testing with Playwright's built-in request context (GET/POST/PUT/DELETE)
// Site: https://jsonplaceholder.typicode.com  (free fake REST API)
const { test, expect } = require('@playwright/test');

const BASE = 'https://jsonplaceholder.typicode.com';

test.describe('API Testing', () => {

  test('GET a single resource', async ({ request }) => {
    const res = await request.get(`${BASE}/posts/1`);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body).toMatchObject({ id: 1, userId: 1 });
    expect(body.title).toBeTruthy();
  });

  test('GET with query params', async ({ request }) => {
    const res = await request.get(`${BASE}/comments`, { params: { postId: 1 } });
    const comments = await res.json();
    expect(comments.length).toBeGreaterThan(0);
    expect(comments.every(c => c.postId === 1)).toBe(true);
  });

  test('POST creates a resource', async ({ request }) => {
    const res = await request.post(`${BASE}/posts`, {
      data: { title: 'Playwright', body: 'API test', userId: 7 },
    });
    expect(res.status()).toBe(201);
    const body = await res.json();
    expect(body).toMatchObject({ title: 'Playwright', userId: 7 });
    expect(body.id).toBeDefined();
  });

  test('PUT updates and DELETE removes a resource', async ({ request }) => {
    const put = await request.put(`${BASE}/posts/1`, {
      data: { id: 1, title: 'Updated', body: 'New body', userId: 1 },
    });
    expect(put.status()).toBe(200);
    expect((await put.json()).title).toBe('Updated');

    const del = await request.delete(`${BASE}/posts/1`);
    expect(del.status()).toBe(200);
  });
});
