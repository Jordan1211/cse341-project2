const { index } = require('../controllers');
const router = require('express').Router();

router.get('/', index);
router.use('/', require('./swagger'));
router.use('/authorization', require('./authorization'));
router.use('/user_admin', require('./user_admin'));
router.use('/user', require('./user'));
router.use('/holiday', require('./holiday'));
router.use('/family', require('./family'));
router.use('/finance', require('./finance'));

module.exports = router;
