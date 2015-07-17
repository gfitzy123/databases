var mysql = require('mysql');


// Create a database connection and export it from this file.
// connect with the user "root", no password,
// and to the database "chat".
exports.connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root', 
	  database : 'chat'
	});

var connection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});

connection.connect();

module.exports = connection;


exports.connect = function(){
	exports.connection.connect(function(err) {
	  if (err) {
	    console.error('error connecting: ' + err.stack);
	    return;
	  }

	  console.log('connected as id ' + exports.connection.threadId);
	})
}

exports.query = function(q, callback){
	console.log('index.js: query: Calling query...\n', q)
	exports.connection.query(q, function(err, rows) {
  		// connected! (unless `err` is set)
  		if (err){
  			console.log('index.js: query: ERROR:', err)
  			callback(err)
  		}
  		console.log('db: index.js: query success',rows)
  		callback(null, rows)
	});	
}

// connect()
// query('show databases;')
// query('use chat')
// query('show tables;')
