var models = require('../models');
var bluebird = require('bluebird'); // promise library
var bodyParser = require('body-parser')
bluebird.promisifyAll(module.exports)

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

  messages: 
  {
    get: function (req, res) 
    {
      // console.log('controllers: index.js:',req.method, req.url, JSON.stringify(res.body))
      // models.messages(res.body)
    }, // a function which handles a get request for all messages
    post: function (req, res) 
    {
    	console.log('controllers: index.js:',req.method, req.url, JSON.stringify(req.body))
    	models.messages(req.body)
      if (req.body)
      {
        models.messages.post(req.body)
      }
    } // a function which handles posting a message to the database
  },

  users: 
  {
    // Ditto as above
    get: function (req, res) 
    {
      console.log('controllers: index.js:',req.method, req.url, JSON.stringify(req.body))
      models.messages.get(req.body)
    },
    post: function (req, res)
    {
      console.log(req.method, 'request to', req.url)
      console.log(req.method,'controllers: index.js:', req.body)
      if (req.body)
      {
        models.users.post(req.body, res, function(err, status)
        {
          if (err) 
          {
            console.log(err)
          }
          else
          {
            res.end(JSON.stringify(status))
          }
        })
      }
    }
  }
};

