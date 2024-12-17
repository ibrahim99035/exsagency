const Media = require('../models/Media');
const cloudinary = require('../config/cloudinary');

const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const uploadMedia = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      public_id: `blog/${uuidv4()}`,
      folder: 'blog',
    });

    const newMedia = new Media({
      url: result.secure_url,
      public_id: result.public_id,
    });

    await newMedia.save();
    res.json(newMedia);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteMedia = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);
    if (!media) return res.status(404).json({ error: 'Media not found' });

    await cloudinary.uploader.destroy(media.public_id);
    await Media.findByIdAndDelete(req.params.id);

    res.json({ message: 'Media deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  uploadMedia,
  deleteMedia,
};