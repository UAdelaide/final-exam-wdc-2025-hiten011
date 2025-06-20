const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: localhost,
  user: root,
  database: dogwalks
});

module.exports = pool;
