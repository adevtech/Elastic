var express = require('express');
var router = express.Router();

/* -- Login --*/
router.use('/login', require('./login/login.js'));
router.use('/register', require('./login/register.js'));
router.use('/forgot_password', require('./login/forgot_password.js'));

/* -- Home Page --*/

router.use('/home', require('./home/home.js'));


module.exports = router;