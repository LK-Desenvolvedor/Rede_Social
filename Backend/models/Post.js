// Post.js

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  image: {
    type: String // Link para a imagem do post (opcional)
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      comment: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
