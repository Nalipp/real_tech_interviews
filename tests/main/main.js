const assert = require('assert');
const request = require('supertest');
const server = require('../../server');

describe('main page GET request', () => {
  it('should GET questions page', (done) => {
    request(server)
    .get('/')
    .end((err, res) => {
      if (err) console.log(err) 
      assert(res.status === 200);
      done();
    });
  });
});
