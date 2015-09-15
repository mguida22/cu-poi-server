var expect = require('chai').expect,
    rewire = require('rewire'),
    helper = rewire('../../lib/helper'),
    sampleData = require('../../fixtures/sample-data');

describe('helper', function() {
  var poiList;

  before(function() {
    poiList = helper.__get__('poiList');
    helper.__set__('poiList', sampleData);
  });

  after(function() {
    helper.__set__('poiList', poiList);
  });

  it('getClosestPOI returns proper value', function() {
    var expectedResult = {
      key: 'BESC',
      name: 'Benson Earth Sciences',
      lat: 40.007921,
      long: -105.265934,
      category: 'Academic'
    };

    var result = helper.getClosestPOI(40.007921, -105.265934);
    expect(result).to.deep.equal(expectedResult);

    expectedResult = {
      key: 'ADEN',
      name: 'Aden Hall',
      lat: 40.006811,
      long: -105.265382,
      category: 'Residential'
    };

    result = helper.getClosestPOI(40.006811, -105.265382);
    expect(result).to.deep.equal(expectedResult);
  });

  it('getPOIofType returns list of all poi of type', function() {
    var result = helper.getPOIofType('Academic');

    expect(result.length).to.equal(2);
    expect(result[0].category).to.equal('Academic');
    expect(result[1].category).to.equal('Academic');
  });

  it('getPOIinRange', function() {
    var result = helper.getPOIinRange(40.007921, -105.265934, 150);

    expect(result.length).to.equal(3);
    expect(result[0].key).to.equal('BESC');
    expect(result[1].key).to.equal('ADEN');
    expect(result[2].key).to.equal('MATH');
  });

  it('searchForPOI', function() {
    var result = helper.searchForPOI('ma');

    expect(result.length).to.equal(2);
    expect(result[0].key).to.equal('MATH');
    expect(result[1].key).to.equal('MAC');

    result = helper.searchForPOI('aden');

    expect(result.length).to.equal(1);
    expect(result[0].key).to.equal('ADEN');
  });
});
