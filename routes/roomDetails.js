var express = require('express');
var router = express.Router();
var data = require('../room.json');
var favorites = require('../favorites.json');


/* GET home page. */
exports.view = router.get('/:name', function(req, res, next) {
  var name = req.params.name;
  //console.log("name: ", name);
  
  data["items"].forEach(function(item, index){
    //console.log(item);
  	if(item.name == name){
      var favItems = favorites["favorites"];
      console.log("FAVS: ", favItems);
      //data["items"][index]["isFavorited"] = "false";
      var isFound = false;
      favItems.forEach(element =>{
        if(element.includes(data["items"][index]["name"])){
          isFound = true;
          data["items"][index]["isFavorited"] = "true";
        }
      })

      if(!isFound && data["items"][index]["isFavorited"]){
        delete data["items"][index]["isFavorited"];
      }
      
      //console.log(data["items"][index]["isFavorited"]);
      res.render('item', data["items"][index]);
    }
  	
  });
  
  
});

module.exports = router;
