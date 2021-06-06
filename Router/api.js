var mailcontrol = require('../Controllers/mailController');
const express = require('express');
var router = express.Router();
router.post('/mail', mailcontrol.sendMail);
module.exports = router;
