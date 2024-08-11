import { SetupServer } from '@src/server';
import supertest, { SuperTest, Test } from 'supertest';

beforeAll(() => {
  console.log('Setting up test environment...');
  const server = new SetupServer();
  server.init();
  global.testRequest = supertest(server.getApp()) as unknown as SuperTest<Test>;
  console.log('Test environment setup complete.');
});
