// backend/controllers/storeController.js
const Store = require('../models/Store');

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

// Create a new store
const createStore = async (req, res) => {
    const { name, description, relatedMall, address, openingDate, closingDate } = req.body;

    let coverImage = '';
    if (req.file) {
        const imagePath = path.join(__dirname, '../uploads', req.file.filename);
        coverImage = imageToBase64(imagePath);
        fs.unlinkSync(imagePath); // Optional: delete the image after converting to base64
    }

    const store = new Store({
        name,
        description,
        relatedMall,
        address,
        openingDate,
        closingDate,
        coverImage,
    });

    try {
        const createdStore = await store.save();
        res.status(201).json(createdStore);
    } catch (error) {
        res.status(400).json({ message: 'Error creating Store', error });
    }
    
};

// Get all stores
const getStores = async (req, res) => {
    const stores = await Store.find({}).populate('relatedMall', 'name location');
    res.json(stores);
};

// Get a store by ID
const getStoreById = async (req, res) => {
    const store = await Store.findById(req.params.id).populate('relatedMall', 'name location');

    if (store) {
        res.json(store);
    } else {
        res.status(404).json({ message: 'Store not found' });
    }
};

// Update a store
const updateStore = async (req, res) => {
    const { name, description, relatedMall, address, openingDate, closingDate } = req.body;

    const store = await Store.findById(req.params.id);

    if (store) {
        store.name = name || store.name;
        store.description = description || store.description;
        store.relatedMall = relatedMall || store.relatedMall;
        store.address = address || store.address;
        store.openingDate = openingDate || store.openingDate;
        store.closingDate = closingDate || store.closingDate;
        
        if (req.file) {
            const imagePath = path.join(__dirname, '../uploads', req.file.filename);
            store.coverImage = imageToBase64(imagePath);
            fs.unlinkSync(imagePath); 
        }

        const updatedStore = await store.save();
        res.json(updatedStore);
    } else {
        res.status(404).json({ message: 'Store not found' });
    }
};

// Delete a store
const deleteStore = async (req, res) => {
    const store = await Store.findByIdAndDelete(req.params.id);

    if (store) {
        res.json({ message: 'Store removed' });
    } else {
        res.status(404).json({ message: 'Store not found' });
    }
};

module.exports = {
    createStore,
    getStores,
    getStoreById,
    updateStore,
    deleteStore,
    upload,
};