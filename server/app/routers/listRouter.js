const express = require('express');
const controller = require('../controllers/listController');
const cardController = require('../controllers/cardController');
const midAuthToken = require('../middlewares/authToken');

const router = express.Router();

router.route('/').get(controller.getAll).post(controller.create);

router
  .route('/:id')
  .get(midAuthToken, controller.getOne)
  .patch(controller.update)
  .delete(controller.delete);

router.route('/:id/cards').get(cardController.getByListId);

module.exports = router;
