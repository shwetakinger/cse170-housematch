var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var handlebars = require('express3-handlebars');
var http = require('http');


var login = require('./routes/login');
// var add = require('./routes/add')


var roomsMatched = require('./routes/roomsMatch');
var roomDetails = require('./routes/roomDetails');
var home = require('./routes/home');
var acc = require('./user.json');
var preferences = require('./routes/preferences');
var sellerReview = require('./routes/sellerReview');
var sellerPreference = require('./routes/sellerPreference');
var favorites = require('./routes/favorites');
var userProfile = require('./routes/profile');



var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//view log in
app.get('/', login.view);
app.post('/authenticate', login.auth);

// app.get('/add', add.addUser);

//sign up


app.set('port', process.env.PORT || 3000);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('js', path.join(__dirname, 'js'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'routes')));


app.use('/roomsMatched', roomsMatched);
app.use('/roomDetails/:name', roomDetails);
app.use('/home', home);
app.use('/preferences', preferences);
app.use('/sellerReview', sellerReview);
app.use('/sellerPreference', sellerPreference);
app.use('/favorites', favorites);
app.use('/profile', userProfile);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log(404)
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});