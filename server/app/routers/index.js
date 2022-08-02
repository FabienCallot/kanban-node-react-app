const express = require('express');

const listRouter = require('./listRouter');
const cardRouter = require('./cardRouter');
const tagRouter = require('./tagRouter');
const errorController = require('../controllers/errorController');

const router = express.Router();

router.use('/lists', listRouter);
router.use('/cards', cardRouter);
router.use('/tags', tagRouter);

// Server error
router.use(errorController.error);

// Réponse 404
router.use(errorController.notFound);

module.exports = router;