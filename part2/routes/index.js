var express = require('express');
var router = express.Router();

router.get('/owner-dashboard', async (req, res) => {
  res.render('owner-dashboard');
});

router.get('/walker-dashboard', async (req, res) => {
  res.render('walker-dashboard');
});

module.exports = router;
