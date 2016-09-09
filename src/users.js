var Client = require('node-rest-client').Client;

var options = require('./options');

exports.listUsers = listUsers;
exports.getUser = getUser;

var client = new Client();
client.registerMethod("listUsers", options.url+"/users.json", "GET");
client.registerMethod("getUser", options.url+"/users/${id}.json", "GET");

function listUsers(name, callback) {
  var args = {
    parameters: {
      name: name,
    }
  }
  client.methods.listUsers(args, function(data, response) {
    callback(data);
  });
}

function getUser(id, callback) {
  var args = {
    path: { "id" : id }
  }
  client.methods.getUser(args, function(data, response) {
    callback(data);
  });
}
