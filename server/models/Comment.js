const CommentSchema = new mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    name: { type: String, required: true }, // Unauthenticated user name
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    content: { type: String, required: true }, // Comment text
    parentCommentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }, // For nested comments
    likes: { type: Number, default: 0 }, // Number of likes
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comment', CommentSchema);  