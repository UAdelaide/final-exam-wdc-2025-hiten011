var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/dogs', function(req, res, next) {
   // checking if user Vector exists
    const userId = req.user.id;
    var isUserVector = false;
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

    if (!isUserVector) {
        // if first time user
        res.sendFile(path.join(__dirname, '../../frontend/personalise.html'));
    } else {
        res.sendFile(path.join(__dirname, '../../frontend/personalise-swipe.html'));
    }

    req.session.visited = true;
    // res.send('works');

    // console.log(req.session.id);
});

router.get('/api/walkrequests/open', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/walkers/summary', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
