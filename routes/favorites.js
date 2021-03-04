var express = require('express');
var router = express.Router();
var favs = require('../favorites.json');


/* GET home page. */
exports.view = router.get('/', function(req, res, next) {
  console.log("json: ", favs.favorites);
  res.render('favorites', favs);
});

module.exports = router;