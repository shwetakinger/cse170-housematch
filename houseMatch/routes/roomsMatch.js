var express = require('express');
var router = express.Router();
var data = require('../data.json');


/* GET home page. */
exports.view = router.get('/', function(req, res, next) {
  console.log("data: ", data);
  res.render('match', data);
});

module.exports = router;

