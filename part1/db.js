const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: localhost,
  user: root,
  database: dogwalks.sql
});

module.exports = pool;
