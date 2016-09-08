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
});
