const Comment = require('../models/Comment');

const addComment = async (req, res) => {
    try {
      const { postId, content, name, gender } = req.body;
  
      const comment = new Comment({ post: postId, content, name, gender });
      await comment.save();
  
      res.status(201).json(comment);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
  
const getCommentsByPost = async (req, res) => {
    try {
      const comments = await Comment.find({ post: req.params.postId });
      res.json(comments);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
  
const deleteComment = async (req, res) => {
    try {
      const deleted = await Comment.findByIdAndDelete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'Comment not found' });
      res.json({ message: 'Comment deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
  
module.exports = {
    addComment,
    getCommentsByPost,
    deleteComment,
};