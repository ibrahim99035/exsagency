const Tag = require('../models/Tag');

// Get all tags
const getAllTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.json(tags);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a tag by ID
const getTagById = async (req, res) => {
  try {
    const tag = await Tag.findById(req.params.id);
    if (!tag) return res.status(404).json({ error: 'Tag not found' });
    res.json(tag);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new tag
const createTag = async (req, res) => {
  try {
    const { name, description } = req.body;

    const existingTag = await Tag.findOne({ name });
    if (existingTag) {
      return res.status(400).json({ error: 'Tag already exists' });
    }

    const newTag = new Tag({ name, description });
    await newTag.save();
    res.status(201).json(newTag);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a tag
const updateTag = async (req, res) => {
  try {
    const updatedTag = await Tag.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedTag) {
      return res.status(404).json({ error: 'Tag not found' });
    }

    res.json(updatedTag);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a tag
const deleteTag = async (req, res) => {
  try {
    const deletedTag = await Tag.findByIdAndDelete(req.params.id);
    if (!deletedTag) {
      return res.status(404).json({ error: 'Tag not found' });
    }

    res.json({ message: 'Tag deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
};