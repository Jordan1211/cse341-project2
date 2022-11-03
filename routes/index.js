const { index } = require('../controllers');
const router = require('express').Router();

const loadUser = require('../middleware/loadUser');

router.get('/', index);
router.use('/', require('./swagger'));
router.use('/authorization', require('./authorization'));
router.use('/user_admin', require('./user_admin'));
router.use('/user', loadUser, require('./user'));
router.use('/holiday', require('./holiday'));
router.use('/family', loadUser, require('./family'));
router.use('/finance', loadUser, require('./finance'));

module.exports = router;
