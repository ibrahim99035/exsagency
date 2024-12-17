const Post = require('../models/Post');
const Media = require('../models/Media');
const Comment = require('../models/Comment');
const User = require('../models/User');
const cloudinary = require('../config/cloudinary');

const getAllPosts = async (req, res) => {
    try {
      const { category, tag, status, page = 1, limit = 10 } = req.query;
  
      const filters = {};
      if (category) filters.category = category;
      if (tag) filters.tags = tag;
      if (status) filters.status = status;
  
      const posts = await Post.find(filters)
        .skip((page - 1) * limit)
        .limit(parseInt(limit));
  
      res.json(posts);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
  
const getPostById = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).populate('category tags');
      if (!post) return res.status(404).json({ error: 'Post not found' });
      res.json(post);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
  
const getPostBySlug = async (req, res) => {
    try {
      const post = await Post.findOne({ slug: req.params.slug });
      if (!post) return res.status(404).json({ error: 'Post not found' });
      res.json(post);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
  
const createPost = async (req, res) => {
    try {
      const { title, content, category, tags, author } = req.body;
      const newPost = new Post({ title, content, category, tags, author });
      await newPost.save();
      res.status(201).json(newPost);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
  
const updatePost = async (req, res) => {
    try {
      const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedPost) return res.status(404).json({ error: 'Post not found' });
      res.json(updatedPost);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
  
const deletePost = async (req, res) => {
    try {
      // Find the post by ID
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      // 1. Delete comments related to this post
      await Comment.deleteMany({ postId: post._id });
  
      // 2. Delete media related to this post from Cloudinary and the database
      const mediaItems = await Media.find({ associatedPost: post._id });
      if (mediaItems.length > 0) {
        for (const media of mediaItems) {
          await cloudinary.uploader.destroy(media.public_id); // Delete from Cloudinary
        }
        await Media.deleteMany({ associatedPost: post._id }); // Delete media from database
      }
  
      // 3. Remove the post from all users' likes
      await User.updateMany(
        { likes: post._id },
        { $pull: { likes: post._id } }
      );
  
      // 4. Delete the post itself
      await post.remove();
  
      // Respond with success
      res.json({ message: 'Post and related data deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
  
const likePost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) return res.status(404).json({ error: 'Post not found' });
  
      if (!post.likes.includes(req.ip)) post.likes.push(req.ip);
  
      await post.save();
      res.json({ likes: post.likes.length });
    } catch (err) {
      res.status(500).json({ error: err.message });
    } 
};
  
const unlikePost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) return res.status(404).json({ error: 'Post not found' });
  
      post.likes = post.likes.filter(ip => ip !== req.ip);
  
      await post.save();
      res.json({ likes: post.likes.length });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
  
module.exports = {
    getAllPosts,
    getPostById,
    getPostBySlug,
    createPost,
    updatePost,
    deletePost,
    likePost,
    unlikePost,
};  