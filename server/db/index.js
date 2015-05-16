var mysql = require('mysql');

/* START SOLUTION */
var connection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});

connection.connect();

module.exports = connection;
/* ELSE
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
END SOLUTION */


