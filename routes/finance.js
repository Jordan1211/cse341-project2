const express = require('express');
const router = express.Router();

const controller = require('../controllers/finance');

router.get('/', controller.getData);
router.get('/:id', controller.getSingle);
router.post('/', controller.createNewRecord);
router.put('/:id', controller.updateAmountById);
router.delete('/:id', controller.deleteById);

module.exports = router;
