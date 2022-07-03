const mongoose = require('mongoose');
const Post = require('../models/posts');
const reMail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
rePhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/;
module.exports = {
  getAllPosts: (req, res) => {
    Post.find()
      .then((posts) => {
        return res.status(200).json(posts);
      })
      .catch((err) =>
        res.status(500).json({
          err,
        })
      );
  },
  getAllPostsAdmin: (req, res) => {
    Post.find()
      .select({ contentsInPost: 0 })
      .then((posts) => {
        return res.status(200).json(posts);
      })
      .catch((err) =>
        res.status(500).json({
          err,
        })
      );
  },
  getPost: (req, res) => {
    const postID = req.params.postID;
    Post.findById(postID)
      .then((post) => {
        return res.status(200).json({ post });
      })
      .catch((err) => {
        return res.status(500).json({ message: err });
      });
  },
  createPost: (req, res) => {
    const { title, category, previewContent, img } = req.body;

    const contentsInPost = req.convertToHtml;
    if (!title || !category || !img || !previewContent || !contentsInPost) {
      return res.status(400).json({ error: 'failed details' });
    }
    const postDetails = new Post({
      _id: mongoose.Types.ObjectId(),
      title,
      category,
      img,
      previewContent,
      contentsInPost,
    });
    postDetails
      .save()
      .then(() => {
        return res.status(201).json({ message: 'postCreated!' });
      })
      .catch((err) => {
        return res.status(400).json({ error: 'Create post failed' });
      });
  },
  editPost: (req, res) => {
    const postID = req.params.postID;
    const validID = mongoose.Types.ObjectId.isValid(postID);
    if (!validID) {
      return res.status(404).json({ message: 'Post not found' });
    }
    const bodyToChange = req.body;
    console.log(bodyToChange);
    Post.findByIdAndUpdate(postID, bodyToChange, { new: true }, (err, doc) => {
      if (err) return res.status(400).json(err);
      return res.status(201).json(doc);
    });
  },
  deletePost: (req, res) => {
    const { postID } = req.params;
    const validID = mongoose.Types.ObjectId.isValid(postID);
    if (!validID) return res.status(400).json({ error: 'Post not found' });
    Post.findByIdAndDelete(postID)
      .then(() => {
        return res.status(200).json({ message: 'Post deleted' });
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  },
};
