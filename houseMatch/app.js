var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var handlebars = require('express3-handlebars');

var indexRouter = require('./routes/index');
var login = require('./routes/login');
var roomsMatched = require('./routes/roomsMatch');
var roomDetails = require('./routes/roomDetails');

var app = express();

//view log in 
app.get('/login', login.view);
app.post('/login/auth', login.auth);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/roomsMatched', roomsMatched);
app.use('/roomDetails/:name', roomDetails);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.get('/', index.view);
app.get('/add', add.newUser);

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
