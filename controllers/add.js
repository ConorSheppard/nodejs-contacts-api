var User = require('../models/user');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    console.log("in add.js")
    // Render the .ejs file "add.ejs"
    res.render('add', {
        title: 'Contacts'
    });
});

router.post('/', function(req, res) {
    var user = req.body;
    User.Insert({ "_id" : "57c0819914d0c13cfe2bf123"});
})

module.exports = router;