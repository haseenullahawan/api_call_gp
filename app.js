var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);

//API # 1
app.get('/all-users',(req,res)=>{
var con = mysql.createConnection({
  host: "68.66.248.55",
  user: "callgpno_igni599",
  password: "786imran",
  database: "callgpno_igni599"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    return res.send(result);
    console.log(result);
  });
});
});

//API # 2

app.get('/haseen',(req,res)=>{
var con = mysql.createConnection({
  host: "68.66.248.55",
  user: "callgpno_igni599",
  password: "786imran",
  database: "callgpno_igni599"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    return res.send("my name is haseen");
    console.log(result);
  });
});
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
