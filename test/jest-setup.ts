import { SetupServer } from '@src/server';
import supertest, { SuperTest, Test } from 'supertest';

beforeAll(() => {
    const server = new SetupServer();
    server.init();
    globalThis.testRequest = supertest(server.getApp()) as unknown as SuperTest<Test>;
});
