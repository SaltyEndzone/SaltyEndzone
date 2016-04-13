const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
 
  userComment: String

});

module.exports = mongoose.model('comment', commentSchema);