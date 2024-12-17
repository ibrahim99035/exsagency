const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: String,
    parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Category', CategorySchema);