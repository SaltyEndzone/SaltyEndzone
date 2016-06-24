//We use passport to see if a user is logged in (and to centralize that logic) before routing them to the relevant controller
const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const LocalStrategy = require('passport-local');

//Setup options for JWT Strategy (strategies are plugins to check user auth in a specific way)
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  //use secret from config file
  secretOrKey: config.secret
};

//Creat local strategy (local referring to info being store on local database for sign in)
//local strategy attempts to default on a username login field, we must tell it we're using an email
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions ,function(email, password, done){
  //Verify this username and password, call done with the user if it is the correct username (email, in this case) and password
  // otherwise, call done with false
  User.findOne({email: email}, function(err, user){
    if (err) { return done(err); }
    if (!user) { return done(null, false); }

    //compare passwords - is 'password' equal to user.password? We need to salt the entered password to see if the new hashed pw
    user.comparePassword(password, function(err, isMatch) {
      if (err) { return done(err); }

      //if no match, return done with null (no error) but with false (we didn't find a user)
      if (!isMatch) { return done(null, false)}

      //otherwise, return done with no error (null) with the user
        return done(null, user);
    })
    //matches the hashed pw saved in our database. We never actually decrypt our password

  })
});

//Create JWT strategy (decoded jwt token with subject/timestamp properties)

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user ID in the payload exists in our database
  //If it does, call 'done' with that user
  //otherwise, call done without a user object
  User.findById(payload.sub, function(err, user) {
    if (err) { return done(err, false); }

    if (user) {
      done(null, user); // tell passport that the person is authenticated
    } else {
      done(null, false); // tell passport that the person is not authenticated
    }
  });
});


//Tell passport to use these strategy
passport.use(jwtLogin);
passport.use(localLogin);