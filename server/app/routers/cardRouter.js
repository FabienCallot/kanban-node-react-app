const express = require('express');
const midAuthToken = require('../middlewares/authToken');
const controller = require('../controllers/cardController');

const router = express.Router();

router
  .route('/')
  .get(midAuthToken, controller.getAll)
  .post(midAuthToken, controller.create);

router
  .route('/:id')
  .get(midAuthToken, controller.getOne)
  .patch(midAuthToken, controller.update)
  .delete(controller.delete);

router.route('/:id/tag').post(controller.associateTag);

router.route('/:card_id/tag/:tag_id').delete(controller.dissociateTag);

module.exports = router;
