const db = require('../db');
const shortId = require('shortid');

const express = require('express');
const multer = require('multer');
const upload = multer({dest: './public/uploads/'});
const router = express.Router();
const controller = require('../controller/user.controller');
const validate = require('../validate/user.validate');
//const { requireAuth } = require('../middlewares/auth.middlewares');


router.get('/',controller.index);

// router.get('/cookie', (req, res, next) => {
//     res.cookie('user-id', 7777777);
//     res.send('hello');
// })

router.get('/search', controller.search);

router.get('/create',controller.create);

router.post('/create', 
    upload.single('avatar'), 
    validate.postCreate, 
    controller.PostCreate
);

router.get('/:id', controller.get);

module.exports = router;