const request = require('supertest');
const app = require('./app');

describe('API Tests', () => {
  test('GET / should return 200 with message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message');
  });

  test('GET /health should return 200', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status', 'healthy');
  });

  // Added this test for the new endpoint
test('GET /api/status should return service information', async () => {
    const response = await request(app).get('/api/status');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('service', 'cicd-demo-app');
    expect(response.body).toHaveProperty('version');
    expect(response.body).toHaveProperty('uptime');
  });
});