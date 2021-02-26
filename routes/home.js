var acc = require("../user.json");

var express = require('express');
var router = express.Router();
var data = require('../data.json');



/* GET home page. */
exports.view = router.get('/', function(req, res, next) {
  res.render('home');
});

module.exports = router;