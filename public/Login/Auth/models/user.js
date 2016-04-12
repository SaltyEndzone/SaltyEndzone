//data model for user which has email and password
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

// Define our model
const userSchema = new Schema({
//we want to enforce uniqueness for individual emails tied to accounts
//note: MongoDB does not enforce case (e.g. case & CASE are different)
//anything saved to email field is converted to lowercase
  email: { type: String, unique: true, lowercase: true },
  password: String
});

/************SIGN UP prehook METHOD************/
// On Save Hook, encrypt password
//Before saving a model, run this function (pre('save') -- before the model gets saved, run this function. This is a hook of sorts)
userSchema.pre('save', function(next) {
  // get access to the user model
  const user = this; // could get user.email/user.password here

  //generate a salt (a string of randomly generated characters. salt + plaintext password = hashed password) then run callback
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }
  
  //hash (i.e. encrypt) our password using the salt
  bcrypt.hash(user.password, salt, null, function(err, hash) {
    if (err) { return next(err); }
    // overwrite plain text password with encrypted password
    user.password = hash;

    //next is saying to go ahead and now save the model
    next();

    });  
  })
});

/************SIGN IN COMPARISON METHOD************/
//checks to see if signing in pw matches the one saved in db
userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err); }

    //else
    callback(null, isMatch);
  })
}

// Create the model class
const ModelClass = mongoose.model('user', userSchema); //could name Users instead of ModelClass


// Export the model
module.exports = ModelClass;