module.exports = (app) => {
  const main = require('./main');
  app.get('/', main.index);
}


// app.get('/', (req, res) => {
//   res.render('main')
// });

// module.exports = function(app){
//     var main = require('../routes/main');
//     var question = require('../routes/question');
//     var questionRouter = express.Router();
//     app.use('/questions', questionRouter);
//     app.get('/beta', main.beta);
//     app.get('/thankyou', main.thankyou);
//     app.get('/', main.index);
//     app.get('/*', main.hacker);

//     questionRouter.get('/', question.all);
//     questionRouter.post('/create', question.create);
//     questionRouter.post('/destroy/:id', question.destroy);
// };

