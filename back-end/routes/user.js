const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

// List of routes
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.post('/getinfos', userCtrl.getInfos);
router.put('/:id', auth, userCtrl.modifyAccount);
router.get('/:id', auth, userCtrl.getIsAdmin);

module.exports = router;
