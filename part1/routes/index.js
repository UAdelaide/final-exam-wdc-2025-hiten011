var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/dogs', function(req, res, next) {
    try {

        const [rows] = await db.query(
            'SELECT user_vector FROM USERSETTINGS WHERE user_id = ?',
            [userId]
        );

        if (!rows[0].user_vector) {
            isUserVector = false;
        } else {
            isUserVector = true;
        }
    } catch (err) {
        isUserVector = false;
    }
});

router.get('/api/walkrequests/open', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/walkers/summary', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
