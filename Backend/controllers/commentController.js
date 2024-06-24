const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
  try {
    const { content, postId, author } = req.body;
    const newComment = new Comment({
      content,
      postId,
      author
    });
    const comment = await newComment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getCommentsByPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await Comment.find({ postId }).populate('author', 'name');
    res.json(comments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
