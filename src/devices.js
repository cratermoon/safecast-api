// devices
var Client = require('node-rest-client').Client;

var options = require('./options');

exports.listDevices = listDevices;
exports.getDevice = getDevice;

var client = new Client();
client.registerMethod("listDevices", options.url+"/devices.json", "GET");
client.registerMethod("getDevice", options.url+"/devices/${id}.json", "GET");

function listDevices(manufacturer, model, sensor, callback) {
  var args = {
    parameters: {
      manufacturer : manufacturer,
      model : model,
      sensor: sensor
    }
  }
  client.methods.listDevices(args, function(data, response) {
    callback(data);
  });
}

function getDevice(id, callback) {
  var args = {
    path: { "id" : id }
  }
  client.methods.getDevice(args, function(data, response) {
    callback(data);
  });
}
