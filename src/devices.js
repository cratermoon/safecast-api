// devices
const https = require('https');
const querystring = require('querystring');

var options = require('./options');

exports.listDevices = listDevices;
exports.getDevice = getDevice;

function listDevices(manufacturer, model, sensor, callback) {
  callback({});
}

function getDevice(id, callback) {
  var str = '';
  options.path = `/devices/${id}.json`;
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
