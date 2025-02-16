const FaqsController = require('../controllers/faqs.controller');
const express = require('express');
const router = express.Router();

router.get('/', FaqsController.get);
router.get('/:id', FaqsController.getOne);

module.exports = router;
