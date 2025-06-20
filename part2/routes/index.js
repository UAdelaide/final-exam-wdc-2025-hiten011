var express = require('express');
var router = express.Router();

router.get('/owner-dashboard', async (req, res) => {
  res.sendFile(path.join(, '../../frontend/settings.html'));
});

router.get('/walker-dashboard', async (req, res) => {
  res.render('walker-dashboard');
});

module.exports = router;
