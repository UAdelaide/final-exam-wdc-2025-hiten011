var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET home page. */
router.get('/owner-dashboard', async (req, res) => {
  res.render('owner-dashboard');
});

router.get('/walker-dashboard', async (req, res) => {
  res.render('walker-dashboard');
});

module.exports = router;
