const express = require('express');
const router = express.Router();
const controller = require('../controller/home.controller');
 
router.get('/', controller.get)
//router.get('/search', controller.search);

module.exports = router;