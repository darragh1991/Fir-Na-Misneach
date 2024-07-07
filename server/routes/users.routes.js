const UserController = require('../controllers/users.controller');
const express = require('express');
const router = express.Router();

router.get('/', UserController.get);
router.get('/:id', UserController.getOne);

module.exports = router;
