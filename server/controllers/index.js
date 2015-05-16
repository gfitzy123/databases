var models = require('../models');
var bluebird = require('bluebird'); // promise library
var bodyParser = require('body-parser')
bluebird.promisifyAll(module.exports)


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

