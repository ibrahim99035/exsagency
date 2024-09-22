const Product = require('../models/Product');

const { imageToBase64, base64ToImage } = require('../utils/uploadHelper');

const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Set up multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = 'uploads/'; // Create this directory in your project
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage: storage });

// Create a new product
const createProduct = async (req, res) => {
    const { name, description, relatedStore } = req.body;

    let coverImage = '';
    if (req.file) {
        const imagePath = path.join(__dirname, '../uploads', req.file.filename);
        coverImage = imageToBase64(imagePath);
        fs.unlinkSync(imagePath); // Optional: delete the image after converting to base64
    }

    const product = new Product({
        name,
        description,
        relatedStore,
        coverImage,
        createdBy: req.user._id,
    });

    try {
        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(400).json({ message: 'Error creating Store', error });
    }
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
        
        if (req.file) {
            const imagePath = path.join(__dirname, '../uploads', req.file.filename);
            product.coverImage = imageToBase64(imagePath);
            fs.unlinkSync(imagePath); 
        }

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

// Delete a product (only allow if the user is the creator or an admin)
const deleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (product) {
        if (product.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized to delete this product' });
        }
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
    upload,
};