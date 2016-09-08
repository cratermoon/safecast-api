const measurement = require('./measurement');
const users = require('./users');
const devices = require('./devices');

module.exports = {

  listUsers: users.listUsers,
  addUser: function() {},
  getUser: users.getUser,

  getMeasurements: measurement.getMeasurements,
  getMeasurement: measurement.getMeasurement,

  getBgeigie_imports: function() {},

  listDevices: devices.listDevices,
  getDevice: devices.getDevice
}
