const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: localhost,
  user: root,
  database: 
});

module.exports = pool;
