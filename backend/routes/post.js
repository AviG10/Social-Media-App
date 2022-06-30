const express = require('express');
const {createPost} = require('../controllers/post');
const { isAuthenticated } = require('../middlewares/auth');

const router = express.Router();

//localhost:4000/api/v1/post/upload
router.route('/post/upload').post(isAuthenticated, createPost);

module.exports = router;