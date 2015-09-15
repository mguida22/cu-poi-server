var request = require('supertest'),
    app     = require('../../app');

describe('poi route', function(){
  it('should respond with a 200', function(done){
    request(app).get('/api/poi')
    .set('Accept', 'application/json')
    .expect(200,done);
  });
});
