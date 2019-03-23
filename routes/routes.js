const ctr1User = require('../controller/controller')
const express = require('express');
const router = express.Router();


router.post('/register', ctr1User.register);
router.post('/login',ctr1User.login);
router.post('/forgotPassword',ctr1User.forgotPassword);
router.post('/resetPassword',ctr1User.resetPassword);
module.exports = router;