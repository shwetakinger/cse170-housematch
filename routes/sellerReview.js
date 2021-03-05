var express = require('express');
var router = express.Router();
var reviews = require("../reviews.json");


exports.view = function(request, response){
	response.render('sellerReview', reviews);
}