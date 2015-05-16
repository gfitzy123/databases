var db = require('../db');
var db = require('../db/index')

console.log('models: index.js: IMPORTED db...', db.toString())
db.connect()
db.query('show databases;')



module.exports = {
  messages: {
  	quote: function(v){return '"'+v+'"'},
    get: function () {}, // a function which produces all the messages
    post: function (reqObject) {
    	// var username = this.quote(reqObject.username)
    	// var room = this.quote(reqObject.roomname)
    	// var text = this.quote(reqObject.text)
    	// var val_str = [room, username, text].join(',')
    	// db.query('INSERT INTO messages (room, user, text) VALUES (' + val_str +');')

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (reqObject, res, callback) {
    	console.log('models: index.js: users.post:', reqObject)
    	//INSERT INTO table1 (field1, field2, ...) VALUES (value1, value2, ...)
    	var username = reqObject.username
    	var q = 'INSERT INTO users (name) VALUES ("'+username+'");'
		db.query(q, function(err, status){
			if (err){
				callback(err)
			}
			else{
				callback(null, status)
			}
		})
    }
  }
};

