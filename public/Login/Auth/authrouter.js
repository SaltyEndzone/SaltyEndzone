//an addition to the index.js (server) file that handles routing.
//this could be part of the same file, but is modular for separation of concerns
//we pass the router handler app
const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

//requireAuth - authenticate user using jwt strategy, and don't use a cookie(session) based approach as we're using tokens
const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

module.exports = function(app){

  //example: for this get request (to reach root), a user must pass through requireAuth and then go through request handler
  app.get('/', requireAuth, function(req, res){
    res.send({hi: 'there'});
  });
  //this function says function says for http requests that are of the post type
  //take in the route (the first argument; users who visit our app are coming to the '/signup' route)
  //req: request(object that represents the incoming http request. shows location of request & route sought), res: response(to whoever made the request) 
  //next: typically displays error handling
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);

  }
