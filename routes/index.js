//load express
var express = require('express');
// create 'instance' of Express called 'app'
var router = express.Router();

// Set up a handler for 'get' request to the home 'route'
// Then call an anonymous function that takes in two arguments, the request object (incoming), and the response object (outgoing). In the function body, we attach “Hello!” to the response and send it back.
// Set up a handler for 'get' request to the 'router' ?
// Routers will help us manage how incoming requests are handled.
// Then call an anonymous function that takes in three arguments, the request object (incoming), and the response object (outgoing), and then next has to do with how Express handles 'middleware'.
// After response sends back 'Hello' we send an additional next() command, also Express
router.get( '/', function(req, res, next) {
    console.log("Here is a console log");
    res.send('Hello World!');
    next();
});

// issue an export order to the router to be a module
// This makes it available to us throughout the rest of the application.
// Basically, we have set this up to be how we handle routes for the entire application.
module.exports = router;