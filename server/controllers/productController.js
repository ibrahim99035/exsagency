// backend/controllers/productController.js
const Product = require('../models/Product');

// Create a new product
const createProduct = async (req, res) => {
    const { name, description, relatedStore, coverImage } = req.body;

    const product = new Product({
        name,
        description,
        relatedStore,
        coverImage,
        createdBy: req.user._id,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
};

// Get all products
const getProducts = async (req, res) => {
    const products = await Product.find({})
        .populate('relatedStore', 'name')
        .populate('createdBy', 'name');
    res.json(products);
};

// Get a product by ID
const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id)
        .populate('relatedStore', 'name')
        .populate('createdBy', 'name');

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

// Update a product (only allow if the user is the creator or an admin)
const updateProduct = async (req, res) => {
    const { name, description, relatedStore, coverImage } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
        if (product.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized to update this product' });
        }

        product.name = name || product.name;
        product.description = description || product.description;
        product.relatedStore = relatedStore || product.relatedStore;
        product.coverImage = coverImage || product.coverImage;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

// Delete a product (only allow if the user is the creator or an admin)
const deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        if (product.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized to delete this product' });
        }

        await product.remove();
        res.json({ message: 'Product removed' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};