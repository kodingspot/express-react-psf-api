const mysql = require('mysql');
const dbConfig = require('./db.config');


const connection = mysql.createConnection(dbConfig);

connection.connect(error => {
  if ( error ) {
    throw error;
  }

  console.log('Connection to MySQL successful!');
});

module.exports = connection;