const FaqsController = require('../controllers/faqs.controller');
const express = require('express');
const router = express.Router();

router.get('/', FaqsController.get);

module.exports = router;
