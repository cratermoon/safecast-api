var Client = require('node-rest-client').Client;

var options = require('./options');

exports.getMeasurements = getMeasurements;
exports.getMeasurement = getMeasurement;

var client = new Client();
client.registerMethod("listMeasurements", options.url+"/measurements.json", "GET");
client.registerMethod("getMeasurement", options.url+"/measurements/${id}.json", "GET");

//todo units
function getMeasurements(latitude, longitude, distance, callback) {
  var args = {
    parameters: {
      latitude: latitude,
      longitude: longitude,
      distance: distance
    }
  }
  client.methods.listMeasurements(args, function(data, response) {
    callback(data);
  });
}

function getMeasurement(id, callback) {
  var args = {
    path: { "id": id}
  }
  client.methods.getMeasurement(args, function(data, response) {
    callback(data);
  });
}
