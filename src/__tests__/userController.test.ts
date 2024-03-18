import request from 'supertest';
import app from '../app';

describe('Integration Tests', () => {
  it('should create, read, update, and delete a user', async () => {
    // Create user
    const createUserResponse = await request(app)
      .post('/api/users')
      .send({ username: 'testuser', age: 25, hobbies: ['reading', 'running'] });
    expect(createUserResponse.status).toBe(201);

    // Get created user
    const userId = createUserResponse.body.id;
    const getUserResponse = await request(app).get(`/api/users/${userId}`);
    expect(getUserResponse.status).toBe(200);

    // Update user
    const updateUserResponse = await request(app)
      .put(`/api/users/${userId}`)
      .send({ username: 'updateduser', age: 30, hobbies: ['swimming'] });
    expect(updateUserResponse.status).toBe(200);

    // Delete user
    const deleteUserResponse = await request(app).delete(`/api/users/${userId}`);
    expect(deleteUserResponse.status).toBe(200);
  });
});
