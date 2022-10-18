const express = require('express');
const router = express.Router();

const controller = require('../controllers/holiday');

router.get('/', controller.getData);
router.get('/:id', controller.getSingle);
router.post('/', controller.createNewHoliday);
router.put('/:id', controller.updateNameById);
router.delete('/:id', controller.deleteById);

module.exports = router;
