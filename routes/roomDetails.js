var express = require('express');
var router = express.Router();
var data = require('../room.json');


/* GET home page. */
exports.view = router.get('/', function(req, res, next) {
  var name = req.params.name;
  //console.log("items: ", data);
  var selectedInd = 0;
  // data.forEach(function(item, index){
  // 	console.log("HII");
  // 	// console.log(decodeURIComponent(name));
  // 	// if(item.name == decodeURIComponent(name)){
  // 	// 	selectedInd = index;
  // 	// }
  // });
  // if(name.contains("Regents")){
  // 	res.render('item', data["items"][1]);
  // }else{
  // 	res.render('item', data["items"][0]);
  // }
  res.render('item', data);
  
});

module.exports = router;