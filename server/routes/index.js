//load express
var express = require('express');
// create 'instance' of Express called 'app'
var router = express.Router();
// Add 'path' module to code
var path = require('path');
// Create instance of mongoose
var mongoose = require('mongoose');
// Connect to our mongodb database, name made up now.
mongoose.connect('mongodb://localhost/basic_walking_skeleton');
// declaring a basic model for our 'Cat' data that we will be bringing into the database, Cats will just have a name for now.
var Cat = mongoose.model('Cat', {name:String});

// Set up a handler for 'get' request to the home 'route'
// Then call an anonymous function that takes in two arguments, the request object (incoming), and the response object (outgoing). In the function body, we attach “Hello!” to the response and send it back.
// Set up a handler for 'get' request to the 'router' ?
// Routers will help us manage how incoming requests are handled.
// Then call an anonymous function that takes in three arguments, the request object (incoming), and the response object (outgoing), and then next has to do with how Express handles 'middleware'.
// After response sends back 'Hello' we send an additional next() command, also Express
router.get( '/', function(req, res, next) {
    console.log("Here is a console log");
    // Display text in HTML
    //res.send('Hello World!');

    // Declare a file and setting it equal to possible parameters coming in on the request OR, if no params, set it equal to our index view.
    var file = req.params[0] || 'views/index.html';
    // setting up our response to ensure it has the proper path to the needed file using sendFile with some path magic at the helm.
    res.sendFile(path.join(__dirname, '../public', file));

    // Comment out our next() functionality, because this will be our ending call where we send information back to the client.
    // Next is there for us to augment the response in additional ways if we decided that is what we wanted to do.
    //next();
});

// issue an export order to the router to be a module
// This makes it available to us throughout the rest of the application.
// Basically, we have set this up to be how we handle routes for the entire application.
module.exports = router;