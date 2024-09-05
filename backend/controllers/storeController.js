// backend/controllers/storeController.js
const Store = require('../models/Store');

// Create a new store
const createStore = async (req, res) => {
    const { name, description, relatedMall, address, openingDate, closingDate, coverImage } = req.body;

    const store = new Store({
        name,
        description,
        relatedMall,
        address,
        openingDate,
        closingDate,
        coverImage,
    });

    const createdStore = await store.save();
    res.status(201).json(createdStore);
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
    const { name, description, relatedMall, address, openingDate, closingDate, coverImage } = req.body;

    const store = await Store.findById(req.params.id);

    if (store) {
        store.name = name || store.name;
        store.description = description || store.description;
        store.relatedMall = relatedMall || store.relatedMall;
        store.address = address || store.address;
        store.openingDate = openingDate || store.openingDate;
        store.closingDate = closingDate || store.closingDate;
        store.coverImage = coverImage || store.coverImage;

        const updatedStore = await store.save();
        res.json(updatedStore);
    } else {
        res.status(404).json({ message: 'Store not found' });
    }
};

// Delete a store
const deleteStore = async (req, res) => {
    const store = await Store.findById(req.params.id);

    if (store) {
        await store.remove();
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
};