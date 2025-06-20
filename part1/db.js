const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: ,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});

module.exports = pool;
