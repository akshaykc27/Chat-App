const ctr1User = require('../controller/controller')
const express = require('express');
const router = express.Router();
const authRoute=require('./authorization')


router.post('/register', ctr1User.register);
router.post('/login',ctr1User.login);
router.use('/auth',authRoute);
router.post('/forgotPassword',ctr1User.forgotPassword);
router.post('/resetPassword',ctr1User.resetPassword);
router.get('/getAllUser',ctr1User.getAllUser);



module.exports = router;