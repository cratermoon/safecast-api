var should  = require('chai').should();

var sc = require('../src/index');

// Measurement API

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

// User API
  describe("#listUsers()", function() {
    it('should return a list of users', function(done) {
      sc.listUsers('', function(userList) {
        userList.should.exist;
        userList.length.should.be.above(0);
        done();
      });
    });
  });

  describe("#getUser(id)", function() {
    it('should return a user given an id', function(done) {
      sc.getUser(1, function(user) {
        user.should.exist;
        user.id.should.equal(1);
        user.name.should.equal('Safecast');
        done();
      });
    });
  });

// Device API

describe("#listDevices", function() {
  it('should return a list of devices given a manufacturer', function(done) {
    sc.listDevices('Quarta', '', '', function(devices) {
      devices.should.exist;
      devices.length.should.be.above(0);
      devices.forEach(function (element) {
        element.manufacturer.should.match(/^Quarta/);
      });
      done();
    });
  });
});

describe("#getDevice(id)", function() {
  it('should return information about a device given an id', function(done) {
    sc.getDevice(4, function(device) {
      device.should.exist;
      device.id.should.equal(4);
      device.manufacturer.should.equal('Quarta');
      device.model.should.equal('Radex');
      device.sensor.should.equal('RD1503');
      done();
    });
  });
});

});
