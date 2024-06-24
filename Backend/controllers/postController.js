const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const { content, imageUrl, author } = req.body;
    const newPost = new Post({
      content,
      imageUrl,
      author
    });
    const post = await newPost.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'name');
    res.json(posts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
