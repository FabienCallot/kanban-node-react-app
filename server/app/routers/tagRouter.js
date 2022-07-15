const express = require('express');
const controller = require('../controllers/tagController');

const router = express.Router();

router.route('/')
    .get(controller.getAll)
    .post(controller.create);

router.route('/:id')
    .get(controller.getOne)
    .patch(controller.update)
    .delete(controller.delete);

module.exports = router;