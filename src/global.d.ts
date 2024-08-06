import supertest from 'supertest';

declare global {
  var testRequest: supertest.SuperTest<supertest.Test>;
}
