const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose.connect(
  `mongodb+srv://hadar:hadar@shop.ob85s.mongodb.net/LironLevi?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on('connected', () => {
  console.log('mongoDB Connected!');
});

const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');
const uploadsRouter = require('./routes/uploads');
const imagesRouter = require('./routes/images');

app.use(cors());

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'front', 'build')));

app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);

app.use('/api/uploads', uploadsRouter);
app.use('/api/images', imagesRouter);

app.use('/uploads', express.static('uploads'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'front', 'build', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
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
