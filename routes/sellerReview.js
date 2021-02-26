var express = require('express');
var router = express.Router();


/* GET home page. */
exports.view = router.get('/', function(req, res, next) {
  res.render('sellerReview');
});

module.exports = router;