//load express
var express = require('express');
// create 'instance' of Express called 'app'
var app = express();

// Set up a handler for 'get' request to the home 'route'
// Then call an anonymous function that takes in two arguments, the request object (incoming), and the response object (outgoing). In the function body, we attach “Hello!” to the response and send it back.

app.get( '/', function(req, res) {
    res.send('Hello!');
});

// Set up a server, set equal to the listen method on the app, taking in two arguments: port we are listening on, anonymous callback function that lets us know that server is in fact up.
// Notice that we are setting the ‘port’ variable equal to the global server variables address method, that has a port property.
var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});
