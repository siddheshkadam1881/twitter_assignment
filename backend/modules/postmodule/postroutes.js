var express = require('express');
var router = express.Router();
let PostController = require('./controllers/post.controller');
let postController = new PostController();

router.post('/createPost', postController.createPost)
router.post('/updatePost', postController.updatePost)
router.post('/postlist', postController.postlist)




module.exports = router;