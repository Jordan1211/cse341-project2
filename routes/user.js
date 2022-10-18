const express = require('express');
const router = express.Router();

const controller = require('../controllers/user');

router.get('/', controller.getData);
router.get('/:id', controller.getSingle);
router.post('/', controller.createNewUser);
router.put('/:id', controller.updateFirstNameById);
router.delete('/:id', controller.deleteById);

module.exports = router;
