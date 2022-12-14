const express = require('express');
const router = express.Router();
const controller = require('../controllers/user_admin');

router.get('/', controller.getData);
router.get('/:id', controller.getSingle);
router.post('/', controller.createNewUser);
router.put('/:id', controller.updateFamilyNameNotesById);
router.delete('/:id', controller.deleteById);

module.exports = router;
