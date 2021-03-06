var mailcontrol = require('../Controllers/mailController');
var usercontrol = require('../Controllers/userController');
var utilitycontrol = require('../Controllers/utilityController');
var upload = require('../Middleware/uploadfile');
var auth = require('../Middleware/authenticate');
const express = require('express');
var router = express.Router();
router.post('/mail', mailcontrol.sendMail);
router.post('/login', usercontrol.login);
router.post('/register', usercontrol.register);
router.get('/countries', auth, utilitycontrol.countries);
router.get('/users', usercontrol.users);
router.get('/profiles', usercontrol.profiles);
router.put('/updateprofile', upload, usercontrol.updateprofile);
router.get('/getprofile/:id', usercontrol.getprofile);
router.get('/getsess', usercontrol.getsess);
router.delete('/deluser/:id', usercontrol.deluser);
router.put('/updateuser', usercontrol.updateuser);

module.exports = router;
