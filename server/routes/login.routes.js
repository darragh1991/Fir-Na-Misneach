const LoginController = require('../controllers/login.controller');
const express = require('express');
const router = express.Router();

router.post('/', LoginController.login);
module.exports = router;