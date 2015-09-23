var request = require('supertest'),
    expect  = require('chai').expect,
    data    = require('../../data/data.json'),
    app     = require('../../app');

describe('poi route', function(){
  describe('closest', function() {
    it('should respond with proper data', function(done) {
      request(app).get('/api/poi/closest?lat=40.0055147&long=-105.2637899')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        expect(res.body.key).to.exist;
        done();
      });
    });

    it('should respond with 400 for invalid parameters', function() {
      request(app).get('/api/poi/closest?lat=40.0055147')
      .set('Accept', 'application/json')
      .expect(400);
    });
  });

  describe('type', function() {
    it('should respond with proper data', function(done) {
      request(app).get('/api/poi/type?type=Academic')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        expect(res.body[0].key).to.exist;
        done();
      });
    });

    it('should respond with 400 for invalid parameters', function() {
      request(app).get('/api/poi/closest?lat=40.0055147')
      .set('Accept', 'application/json')
      .expect(400);
    });
  });

  describe('range', function() {
    it('should respond with proper data', function(done) {
      request(app).get('/api/poi/range?lat=40.0055147&long=-105.2637899&range=100')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        expect(res.body[0].key).to.exist;
        done();
      });
    });

    it('should respond with 400 for invalid parameters', function() {
      request(app).get('/api/poi/closest?lat=40.0055147')
      .set('Accept', 'application/json')
      .expect(400);
    });
  });

  describe('search', function() {
    it('should respond with proper data', function(done) {
      request(app).get('/api/poi/search?q=bk')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        expect(res.body[0].key).to.exist;
        done();
      });
    });

    it('should respond with 400 for invalid parameters', function() {
      request(app).get('/api/poi/closest?lat=40.0055147')
      .set('Accept', 'application/json')
      .expect(400);
    });
  });

  describe('all', function() {
    it('should return all data', function(done) {
      request(app).get('/api/poi/all')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        expect(res.body.length).to.equal(data.length);
        done();
      });
    });
  });
});
