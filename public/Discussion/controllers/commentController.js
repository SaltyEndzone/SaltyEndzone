const Comment = require('../models/comment');

exports.postComment = function(req, res, next) {
  const userComment = req.body.userComment;
  //remember to add username reference here
  const comment = new Comment({
    userComment: userComment
  })
  
  comment.save(function(err){
    if(err) {
      return next(err);
    }
    console.log(userComment);
  })

  res.end();
}