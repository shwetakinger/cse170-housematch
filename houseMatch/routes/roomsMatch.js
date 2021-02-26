var express = require('express');
var router = express.Router();
var data = require('../data.json');


/* GET home page. */
exports.view = router.get('/', function(req, res, next) {
  console.log("data: ", data);
  res.render('match', data);
});

// $("#search-bar").keypress(function(event) { 
//     if (event.keyCode === 13) { 
//     	console.log("enter pressed");
//     	// $("#GFG_Button").click(); 
//     } 
// }); 


module.exports = router;

