const express = require('express');

const listRouter = require('./listRouter');
const cardRouter = require('./cardRouter');
const tagRouter = require('./tagRouter');
const auth = require('./auth');
const errorController = require('../controllers/errorController');
const midAuthToken = require('../middlewares/authToken');

const router = express.Router();

router.use('/auth', auth);
router.use('/lists', midAuthToken, listRouter);
router.use('/cards', midAuthToken, cardRouter);
router.use('/tags', midAuthToken, tagRouter);

// Server error
router.use(errorController.error);

// Réponse 404
router.use(errorController.notFound);

module.exports = router;
