import { SetupServer } from '@src/server';
import supertest, { SuperTest, Test } from 'supertest';

beforeAll(async () => {
    console.log('Setting up test environment...');
    const server = new SetupServer();
    await server.init();
    global.testRequest = supertest(server.getApp()) as unknown as SuperTest<Test>;
    console.log('Test environment setup complete.');
});
