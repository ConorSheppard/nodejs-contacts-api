var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var morgan = require('morgan');
var path = require('path');
var marked = require('marked');
var fs = require('fs');
var logger = require('winston');
var userController = require('./controllers/users');
// var updateContact = require('./controllers/updateContact');
var addNew = require('./controllers/add');

var app = express();

var bodyParser = require('body-parser')

// Add middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.get('/', function(req, res, err) {
    return res.render('index.ejs');
});

// Return contact list
app.get('/users', function(req, res, err, title, users) {
    return res.render('users.ejs');
});

//  Return contact
app.get('/users/:id', function(req, res, err, user) {
    return res.render('user.ejs');
});

app.get('/edit-user', function(req, res) {
    return res.render('edit-user.ejs');
});

app.post('updateContact', function (req, res) {
    res.send('new name: ' + req.body.updateName);
});

// See the User Controller for `/users` routes
app.use('/users', userController);

// app.use('/updateContact', updateContact);

app.use('/add', addNew);

// Some switches for acceptance tests
if (require.main === module) {
    // Only connect to MongoDB if app.js is running
    // If required (e.g. in tests), let these tests establish a DB connection themselves
    mongoose.connect('mongodb://localhost/users');

    // Only listen when app.js is running - acceptance tests will listen on another port
    app.listen(8000, function() {
        logger.info('Listening at http://localhost:8000 - see here for API docs');
    });
}

module.exports = app;