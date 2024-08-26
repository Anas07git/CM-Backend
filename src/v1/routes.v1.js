const express = require('express');
const statusRoutes = require('./status/status.routes');
const signupRoutes = require('./signup/signup.routes')
const loginRoutes = require('./login/login.routes');

const router = express.Router();

router.use('/status', statusRoutes);
router.use('/signup', signupRoutes);
router.use('/login', loginRoutes);

module.exports = router;