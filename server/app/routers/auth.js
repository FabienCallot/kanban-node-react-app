const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();

router.route('/login').post(controller.loginAction);
router.route('/signin').post(controller.signinAction);

module.exports = router;
