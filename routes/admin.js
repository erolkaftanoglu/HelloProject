/**
 * Created by erol on 21.04.2017.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Admin' });
});

module.exports = router;
