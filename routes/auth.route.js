const express = require('express');
const router = express.Router();
const controller = require('../controller/auth.controller');

router.get('/login', controller.login);
router.get('/logout',controller.logout);

router.post('/login', controller.postLogin);
module.exports = router;