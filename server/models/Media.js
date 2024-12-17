const MediaSchema = new mongoose.Schema({
    url: { type: String, required: true }, // Cloudinary URL
    type: { type: String, enum: ['image', 'video', 'file'], required: true },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    associatedPost: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
  
module.exports = mongoose.model('Media', MediaSchema);  