var express = require('express');
var router = express.Router();
var users = require('../controller/controller');
var chatController = require('../controller/chatController');
var auth = require('../authentication');
try {
    router.get('/getAllUser', auth, users.getAllUser);
    router.get('/getUserMessage', auth, chatController.getUserMessage);
}
catch (err) {
    console.log("ERROR: in receiving the token in authorization");
}

module.exports = router

