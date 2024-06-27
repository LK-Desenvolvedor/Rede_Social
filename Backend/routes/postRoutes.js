const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/auth');
const upload = require('../utils/multer');


router.post('/posts', authMiddleware, upload.single('image'), postController.createPost);


router.get('/posts', authMiddleware, postController.getPosts);

module.exports = router;
