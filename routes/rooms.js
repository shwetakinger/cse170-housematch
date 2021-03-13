var express = require('express');
var router = express.Router();
var data = require('../data.json');
var rooms = require('../room.json');


exports.view = function (request, response) {
  console.log("in rooms");
  console.log(request.query.roomType, request.query.bathroom);
  var obj = {};
  obj["name"] = request.query.location;
  console.log("in!!");
  if(request.query.price.includes("%24")){
  	obj["price"] = request.query.price + "/mo";
  }else{
  	obj["price"] = "$" + request.query.price + "/mo";
  }
  //obj["img"] = localStorage.getItem('imgData');
  //obj["img"] = "https://q-xx.bstatic.com/xdata/images/hotel/840x460/65638324.jpg?k=1e6c5650d7e45f4ecab961bca77fdaf269e3acaf51e4313b94e3cff03d8b10ed&o=";
  obj["img"] = "";
  obj["imgId"] = "id1";
  data.rooms.push(obj);

  // update items json
  var itemObj = {};
  itemObj["img"] = "https://q-xx.bstatic.com/xdata/images/hotel/840x460/65638324.jpg?k=1e6c5650d7e45f4ecab961bca77fdaf269e3acaf51e4313b94e3cff03d8b10ed&o=";
  itemObj["contactPerson"] = "Eric Nam";
  itemObj["contactEmail"] = "eric@ucla.edu";
  itemObj["contactNumber"] = "6504555321";
  itemObj["name"] = request.query.location;
  itemObj["address"] = request.query.address;
  itemObj["price"] = obj["price"];
  itemObj["type"] = request.query.roomType;
  itemObj["bathroom"] = request.query.bathroom;
  itemObj["additionalDetails"] = [];
  itemObj["additionalDetails"].push(request.query.additionalDescription);

  rooms.items.push(itemObj);

  
  response.render('match', data);
}