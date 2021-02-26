var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var handlebars = require('express3-handlebars');
var http = require('http'); 
var indexRouter = require('./routes/index');
var login = require('./routes/login');
var roomsMatched = require('./routes/roomsMatch');
var roomDetails = require('./routes/roomDetails');
var home = require('./routes/home');
var acc = require('./user.json');
var preferences = require('./routes/preferences');
var sellerReview = require('./routes/sellerReview');
var sellerPreference = require('./routes/sellerPreference');
var favorites = require('./routes/favorites');
var userProfile = require('./routes/profile');

// var usersRouter = require('./routes/users');

var app = express();

//view log in 
app.get('/', login.view);
/*app.post('/login', (req, res)=>{
  console.log("in auth~~~");
  console.log(req.body);
  // sess = req.session;
  // sess.email = req.body.email;
  // sess.pass = req.body.pass;
  // console.log("sess: ", sess);
  var data = acc["user"];
  console.log(data.length);
  for(var i = 0; i < data.length; i++) {
      var obj = data[i];
      console.log("obj: ", obj);
      if (obj["email"] == sess.email && obj["pass"] == sess.pass) {
        sess.name = obj["name"];
        sess.userID = obj["id"];
        res.end('done');
        console.log("in auth");
        res.redirect("/home");
      }
  }
  res.end('fail');

}) */
app.set('port', process.env.PORT || 3000);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/roomsMatched', roomsMatched);
app.use('/roomDetails/:name', roomDetails);
app.use('/home', home);
app.use('/preferences', preferences);
app.use('/sellerReview', sellerReview);
app.use('/sellerPreference', sellerPreference);
app.use('/favorites', favorites);
app.use('/profile', userProfile);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//app.get('/', indexRouter.view);
//app.get('/add', add.newUser);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
