let express = require('express');
let router = express.Router();
const {
  getAllPosts,
  createPost,
  editPost,
  deletePost,
  getAllPostsAdmin,
} = require('../controllers/posts');
/* GET home page. */
const convertDocxForHtml = require('../middlewares/convertToHtml');
const upload = require('../middlewares/upload');

router.get('/', getAllPosts);
router.get('/admin', getAllPostsAdmin);

router.post(
  '/',
  upload.single('contentsInPost'),
  convertDocxForHtml,
  createPost
);
router.patch('/:postID', editPost);
router.delete('/:postID', deletePost);

module.exports = router;
