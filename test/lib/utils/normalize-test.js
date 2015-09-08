var expect  = require('chai').expect,
    normalize = require('../../../lib/utils/normalize.js');

describe('normalize', function() {
  it('remove anything not a letter', function(){
    var str = normalize('not a!@#$ll lett12324ers 19342');
    expect(str).to.equal('not all letters');
  });

  it('removes extra spaces', function(){
    var str = normalize('extra spaces    in the string   ');
    expect(str).to.equal('extra spaces in the string');
  });

  it('normalize the string', function(){
    var str = normalize('everyth./2@ing workING   ');
    expect(str).to.equal('everything working');
  });
});
