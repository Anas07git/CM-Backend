const express = require('express');
const signupRoutes = require('./signup/signup.routes')
const loginRoutes = require('./login/login.routes');

const router = express.Router();

router.use('/signup', signupRoutes);
router.use('/login', loginRoutes);

module.exports = router;