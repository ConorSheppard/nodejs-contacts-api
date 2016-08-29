var User = require('../models/user');
var express = require('express');
var router = express.Router();

// GET /users
// Get a list of users
router.get('/', function(req, res) {
    console.log("in users.js: router.get");
    User.find({}, function(err, users) {
        if(err) { return res.status(500).json({ error: "Error listing users: " + err }); }
        res.render('users', {
            title: 'Contacts',
            users: users
        });
    });
});

// GET /users/:id
// Get a user by ID
router.get('/:id', function(req, res) {
    console.log("in users.js: router.get /:id");
    console.log("req.url: " + req.body.toString());
    User.findOne({ _id: req.params.id }, function(err, user) {
        if(err) { return res.status(500).json({ error: "Error reading user: " + err }); }
        if(!user) { return res.status(404).end(); }
        res.render('user', {
            title: 'Contact',
            user: user
        });
    });
});

// Delete the chosen contact
router.get('/delete-user/:id', function(req, res) {
    User.findOneAndRemove({ _id: req.params.id }, function(err, user) {
        if(err) { return res.status(500).json({ error: "Error reading user: " + err }); }
        if(!user) { return res.status(404).end(); }
    });
    User.find({}, function(err, users) {
        if(err) { return res.status(500).json({ error: "Error listing users: " + err }); }
        res.render('users', {
            title: 'Contacts',
            users: users
        });
    });
});

// Go to the update contact page
router.get('/edit-user/:id', function(req, res) {
    console.log("in users/edit-user");
    User.findOne({ _id: req.params.id }, function(err, user) {
        if(err) { return res.status(500).json({ error: "Error reading user: " + err }); }
        if(!user) { return res.status(404).end(); }
        res.render('edit-user', {
            title: 'Contact',
            user: user
        });
    });
});

// Update the chosen contact on the given criteria
router.post('/updateContact', function(req, res) {
    console.log("in users/updateContact");
    User.findOneAndUpdate({ _id: req.params.id }, function(err, user) {
        if(err) { return res.status(500).json({ error: "Error reading user: " + err }); }
        if(!user) { return res.status(404).end(); }
        res.render('edit-user', {
            title: 'Contact',
            user: user
        });
    });
    User.findOne({ _id: req.params.id }, function(err, user) {
        if(err) { return res.status(500).json({ error: "Error reading user: " + err }); }
        if(!user) { return res.status(404).end(); }
        res.render('user', {
            title: 'Contact',
            user: user
        });
    });
});

module.exports = router;