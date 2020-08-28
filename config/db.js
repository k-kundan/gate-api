var promise = require('bluebird');

// Initialization Options
var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = {
  host: 'localhost',
  password: 'rfid1234',
  user: 'rfid',
  database: 'rfid_db'
}
var db = pgp(connectionString);