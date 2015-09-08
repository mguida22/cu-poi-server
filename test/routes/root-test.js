var request = require('supertest'),
    app     = require('../../app');

describe('root route', function(){
  it('should respond with a 200', function(done){
    request(app).get('/')
    .set('Accept', 'application/json')
    .expect(200,done);
  });
});
