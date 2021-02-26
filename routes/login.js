// var express = require('express');
// var router = express.Router();
// var user = require('../user.json');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   console.log(user);
//   Response.render('index');
//   res.send('respond with a resource');
// });

// module.exports = router;

  
var acc = require('../user.json')

exports.view = function(request,response) {
  console.log("in login");
  response.render('login');
}

//check if the email and password match with database
// exports.auth = function (req,res) {
//   console.log("in auth!!");
//   sess = req.session;
//   sess.email = req.body.email;
//   sess.pass = req.body.pass;
  
//   var data = acc["user"];
//   for(var i = 0; i < data.length; i++) {
//       var obj = data[i];
//       console.log(obj, sess);
//       if (obj["email"] == sess.email && obj["pass"] == sess.pass) {
//         sess.name = obj["name"];
//         sess.userID = obj["id"];
//         res.end('done');
//         console.log("in auth");
//         res.redirect("/home");
//       }
//   }
//   res.end('fail');
//   // res.end('done');
// };


