var acc = require('../user.json')

exports.view = function (request, response) {
  console.log("in login");
  response.render('login');
}

// //check if the email and password match with database
exports.auth = function (req, res) {
  console.log("in auth!!");
  var data = acc["user"];
  
  for (var i = 0; i < data.length; i++) {
    var obj = data[i];

    console.log(req.body.email, obj["email"], req.body.email == obj["email"])
    console.log(req.body.pass, obj["pass"], req.body.pass == obj["pass"])
    if (obj["email"] == req.body.email && obj["pass"] == req.body.pass) {
      console.log("matched")
      return res.end("done");
    }
  }

  console.log("fail")
  return res.end("fail")
};