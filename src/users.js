const https = require('https');
const querystring = require('querystring');

var options = require('./options');

exports.listUsers = listUsers;
exports.getUser = getUser;

function listUsers(name, callback) {
  var str = '';
  var qs = querystring.stringify({
    name: name
  });
  options.path = `/users.json?${qs}`;
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

function getUser(id, callback) {
  var str = '';
  options.path = `/users/${id}.json`;
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
