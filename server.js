const express = require('express');
const app = express();
const path = require('path');

// Environments
const env = process.env.NODE_ENV || 'development';
const envConfig = require('./config/env')[env];

// Express configuration
require('./config/config')(app, envConfig);

// Database
app.use(express.static(path.join(__dirname, 'public')));

// Routes
require('./routes/routesConfig.js')(app);

// Start server
app.listen(envConfig.port, () => {
  console.log('Server listening on port ' + envConfig.port);
});

module.exports = app;
