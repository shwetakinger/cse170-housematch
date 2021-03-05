var express = require('express');
var router = express.Router();
var data = require('../room.json');


/* GET home page. */
exports.view = router.get('/:name', function(req, res, next) {
  var name = req.params.name;
  console.log("name: ", name);
  
  data["items"].forEach(function(item, index){
    console.log(item);
  	if(item.name == name){
      res.render('item', data["items"][index]);
    }
  	
  });
  
  
});

module.exports = router;
