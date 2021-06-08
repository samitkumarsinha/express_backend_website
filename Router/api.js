var mailcontrol = require('../Controllers/mailController');
var usercontrol = require('../Controllers/userController');
const express = require('express');
var router = express.Router();
router.post('/mail', mailcontrol.sendMail);
router.post('/login', usercontrol.login);
router.post('/register', usercontrol.register);
module.exports = router;
