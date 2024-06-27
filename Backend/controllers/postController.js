// postController.js

const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const { content, image } = req.body;
    const newPost = new Post({
      content,
      image,
      user: req.userId // Obtido do middleware de autenticação
    });
    const post = await newPost.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).populate('user', 'name avatar');
    res.json(posts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.addComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { comment } = req.body;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post não encontrado" });
    }
    post.comments.push({
      user: req.userId,
      comment
    });
    await post.save();
    res.status(201).json(post.comments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.likePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post não encontrado" });
    }
    post.likes += 1;
    await post.save();
    res.json({ likes: post.likes });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
