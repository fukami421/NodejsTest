const express = require('express');
const router = express.Router();
var controller = {};
controller.users_controller = require('../controllers/users_controller');

/* GET users listing. */
router.get('/', controller.users_controller.default);

router.get('/user', controller.users_controller.get_id);//controllerから取得

router.get('/google', controller.users_controller.get_google_site);

router.get('/get_json', controller.users_controller.get_json);

module.exports = router;
