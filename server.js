const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

// view engine setup
app.set('view engine', 'pug');
//app.use(favicon(envConfig.rootPath + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

const port = process.env.PORT || 3000;
// telling Express to serve static objects from the /public/ dir, but make it seem like the top level
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('main')
});

// Start server
app.listen(port, () => {
  console.log('Server listening on port ' + 3000);
});
