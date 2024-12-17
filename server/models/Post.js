const mongoose = require('mongoose');
const slugify = require('slugify');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true }, // URL-friendly identifier
  content: { type: String, required: true },
  summary: { type: String },
  coverImage: { type: String }, // Cloudinary URL
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tags: [{ type: String }],
  categories: [{ type: String }],
  status: { type: String, enum: ['draft', 'published', 'archived'], default: 'draft' },
  scheduledAt: Date,
  publishedAt: Date,
  views: { type: Number, default: 0 },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Middleware to generate slug before saving
PostSchema.pre('save', async function (next) {
  if (this.isModified('title') || this.isNew) {
    // Generate slug from title
    let slug = slugify(this.title, { lower: true, strict: true });
    
    // Ensure slug is unique
    let existingPost = await this.constructor.findOne({ slug });
    let counter = 1;
    while (existingPost) {
      slug = `${slugify(this.title, { lower: true, strict: true })}-${counter}`;
      existingPost = await this.constructor.findOne({ slug });
      counter++;
    }

    // Set the slug
    this.slug = slug;
  }
  next();
});

module.exports = mongoose.model('Post', PostSchema);