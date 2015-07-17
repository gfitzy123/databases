var models = require('../models');
var bluebird = require('bluebird');


module.exports = {
// Creates a "GET" controller from an executor given by
// makeExecutor.
//
// Should only be used with executors that expect no parameters.
var makeGetter = function (executor, after) {
  if (!after) { after = function (x) { return x; } }

  return function (req, res, next) {
    executor()
      .then(function (data) {
        // format and send the data
        res.json(after(data));
      }).catch(function (err) {
        // catch and propagate the error
        next(err);
      });
  };
};

// Create a "POST" controller from an executor.
//
// used with executors which require certain arguments
// by providing fields, which specifies which data from the request
// body is needed for each query argument.
var makeSetter = function (executor, fields) {
  return function (req, res, next) {
    // For each field, get the data out of the request body.
    var queryArgs = fields.map(function (field) { return req.body[field]; });

    // If not all the query arguments are present, abort.
    if (queryArgs.some(function (x) { x === undefined })) {
      res.send(400);
      return next();
    }

    executor(queryArgs)
      .then(function () {
        // Data saved, send 201
        res.sendStatus(201);
      }).catch(function (err) {
        // catch and propagate the error
        next(err);
      });
  };
};

module.exports = {

  messages: {
    get: makeGetter(models.messages.get, function (d) { return d[0]; }),
    post: makeSetter(models.messages.post, ['message', 'username', 'roomname'])
  },

  users: {
    get: makeGetter(models.users.get),
    post: makeSetter(models.users.post, ['username'])
  }
};

