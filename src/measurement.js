const https = require('https');
const querystring = require('querystring');

var options = require('./options');

exports.getMeasurements = getMeasurements;
exports.getMeasurement = getMeasurement;

function getMeasurements(latitude, longitude, distance, callback) {
  var str = '';
  var qs = querystring.stringify({
    latitude: latitude,
    longitude: longitude,
    distance: distance
  });
  options.path = `/measurements.json?${qs}`;
  var req = https.get(options, (res) => {
    res.on('data', (d) => {
      str += d;
    });
    res.on('end', function () {
      callback(JSON.parse(str));
    });

  });

  req.end();


  req.on('error', (e) => {
    console.error(e);
  });
}


function getMeasurement(id, callback) {
  var str = '';
  options.path = `/measurements/${id}.json`
  var req = https.get(options, (res) => {
    res.on('data', (d) => {
      str += d;
    });
    res.on('end', function () {
      callback(JSON.parse(str));
    });

  });

  req.end();

  req.on('error', (e) => {
    console.error(e);
  });
}
