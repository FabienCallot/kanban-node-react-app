const express = require('express');
const controller = require('../controllers/listController');
const cardController = require('../controllers/cardController');
const midAuthToken = require('../middlewares/authToken');

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

router.route('/:id/cards').get(cardController.getByListId);

module.exports = router;
