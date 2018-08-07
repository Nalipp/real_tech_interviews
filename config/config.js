const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

module.exports = (app, envConfig) => {
    // view engine setup
    app.set('views', path.join(envConfig.rootPath, 'views'));
    app.set('view engine', 'pug');
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(cookieParser());
    app.use(express.static(path.join(envConfig.rootPath, 'public')));
};
