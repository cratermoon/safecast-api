var should  = require('chai').should();

var sc = require('../src/index');

describe('safecast', function() {

  describe('#getMeasurements()', function() {
    it('should return a measurement for 0,0', function(done) {
      sc.getMeasurements(0,0,1,function(result) {
        result.should.exist;
        result.should.have.length.above(1);
        var last = result[result.length - 1];
        last.id.should.exist
        last.latitude.should.equal(0);
        last.longitude.should.equal(0);
        last.value.should.be.above(0);
        done();
      });
    })
  });

  describe('#getMeasurement()', function() {
    this.slow(10000);
    it('should return a result for measurement id 70900277', function(done) {
      sc.getMeasurement(70900277, function(result) {
        result.should.exist;
        result.id.should.equal(70900277);
        result.latitude.should.equal(0);
        result.longitude.should.equal(0);
        done();
      });
    });
  });

});
