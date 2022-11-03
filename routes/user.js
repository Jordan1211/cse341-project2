const { Router } = require('express');
const UsersController = require('../controllers/user');

const router = Router();

router.get('/', UsersController.UsersController.index);

module.exports = router;
