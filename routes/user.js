const { Router } = require('express');
const UsersController = require('../controllers/user');
const loadUser = require('../middleware/loadUser');

const router = Router();

router.get('/', UsersController.UsersController.index);

module.exports = router;
