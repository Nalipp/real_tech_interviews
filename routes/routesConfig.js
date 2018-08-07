module.exports = (app) => {
  const main = require('./main');
  app.get('/', main.index);
}


