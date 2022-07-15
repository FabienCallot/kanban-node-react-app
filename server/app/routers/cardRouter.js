const express = require('express');
const controller = require('../controllers/cardController');

const router = express.Router();


router.route('/')
    .get(controller.getAll)
    .post(controller.create);

router.route('/:id')
    .get(controller.getOne)
    .patch(controller.update)
    .delete(controller.delete);

router.route('/:id/tag')
    .post(controller.associateTag);

router.route('/:card_id/tag/:tag_id')
    .delete(controller.dissociateTag);

module.exports = router;