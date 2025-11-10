const express = require('express');
const { getPosts, createPost } = require('../controllers/postController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/', getPosts);
router.post('/', protect, createPost);

module.exports = router;