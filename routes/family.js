const express = require('express');
const router = express.Router();

const controller = require('../controllers/family');

router.get('/', controller.getData);
router.get('/:id', controller.getSingle);
router.post('/', controller.createNewFamily);
router.put('/:id', controller.updateFamilyNameById);
router.delete('/:id', controller.deleteById);

module.exports = router;
