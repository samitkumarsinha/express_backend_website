var mailcontrol = require('../Controllers/mailController');
var usercontrol = require('../Controllers/userController');
var utilitycontrol = require('../Controllers/utilityController');
var upload = require('../Middleware/uploadfile');
const express = require('express');
var router = express.Router();
router.post('/mail', mailcontrol.sendMail);
router.post('/login', usercontrol.login);
router.post('/register', usercontrol.register);
router.get('/countries', utilitycontrol.countries);
router.get('/users', usercontrol.users);
router.put('/updateprofile', upload, usercontrol.updateprofile);
router.get('/getprofile/:id', usercontrol.getprofile);
module.exports = router;
