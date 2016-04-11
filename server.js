var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var httpProxy = require('http-proxy');
var publicPath = path.resolve(__dirname, 'public');


//JB additions (bodyParser & authrouter)
var authrouter = require('./public/Login/Auth/authrouter');
var bodyParser = require('body-parser');

// We need to add a configuration to our proxy server,
// as we are now proxying outside localhost
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;


// We need to add a configuration to our proxy server,
// as we are now proxying outside localhost
var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});

var app = express();


var dbURI='mongodb://heroku_3q6cp12q:8bdmlrro29rr1l85hr5j08a5gb@ds025409.mlab.com:25409/heroku_3q6cp12q';
mongoose.connect( dbURI );

//serving our index.html
app.use(express.static(publicPath));

//JB addition -- //used to parse incoming requests in to JSON no matter what the request type is
app.use(bodyParser.json({type: '*/*'})); 
authrouter(app);

//server/compiler.js runs webpack-dev-server which creates the bundle.js which index.html serves
//the compiler adds some console logs for some extra sugar
//notice that you will not see a physical bundle.js because webpack-dev-server runs it from memory

if (!isProduction) {
  var bundle = require('./server/compiler.js')
  bundle()
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    })
  })
}

//express now processes all requests to localhost:8080
//app.all is a special routing method used for loading middleware functions

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...')
});

app.get('/*', function(req, res) {
  res.sendFile(publicPath + '/index.html');
});


app.listen(port, function () {
  console.log('Server running on port ' + port)
});

mongoose.connection.on( 'connected', function () {

  console.log( 'successful db connection to: ' + dbURI + '\n' );

});