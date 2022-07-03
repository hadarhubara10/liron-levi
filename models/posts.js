const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  category: { type: String, required: true },
  img: { type: String, required: true },
  previewContent: { type: String, required: true },
  contentsInPost: { type: String },
});

module.exports = mongoose.model('Post', postSchema);
