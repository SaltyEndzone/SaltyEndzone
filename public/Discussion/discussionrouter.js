const commentController = require('./controllers/commentController');

module.exports = function(app){

  app.post('/discussionBox', commentController.postComment);

  }
