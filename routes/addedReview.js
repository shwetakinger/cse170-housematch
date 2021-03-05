var express = require('express');
var router = express.Router();
var data = require('../reviews.json');


exports.view = function (request, response) {
  console.log("in reviews", request.query.description);
  var obj = {};
  obj["name"] = request.query.reviewer;
  obj["description"] = request.query.description;
  data.reviews.push(obj);
  
  
  //response.render('sellerReview', data);
  response.redirect('/sellerReview');
}