const { index } = require('../controllers');
const router = require('express').Router();

router.get('/', index);
router.use('/', require('./swagger'));
router.use('/authorization', require('./authorization'));
router.use('/user', require('./user'));
router.use('/holiday', require('./holiday'));
router.use('/family', require('./family'));

module.exports = router;
