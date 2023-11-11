const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');


router.post('/createpost', auth, postCtrl.createPost);
router.get('/', postCtrl.getAllPosts);
router.get('/:id', auth, postCtrl.getOnePost);
router.put('/:id', auth, postCtrl.modifyPost);
router.delete('/:id', auth, postCtrl.deletePost);
router.post('/:id/like', auth, postCtrl.likePost);
router.post('/:id/comment', auth, postCtrl.commentPost);

router.get('/test', postCtrl.test)


module.exports = router;
