const express = require('express');
const controller = require('../controllers/user');
const router = express.Router();

router.get('/', controller.getData);
router.get('/:id', controller.getSingle);

router.post('/', controller.createNewUser);

router.put('/:id', controller.updateById);

router.delete('/:id', controller.deleteById);
// router.delete('/deleteMany', controller.deleteManyByName);

module.exports = router;
