// backend/controllers/mallController.js
const Mall = require('../models/Mall');

// Create a new mall
const createMall = async (req, res) => {
    const { name, location, address, openingDate, closingDate, coverImage } = req.body;

    const mall = new Mall({
        name,
        location,
        address,
        openingDate,
        closingDate,
        coverImage,
    });

    const createdMall = await mall.save();
    res.status(201).json(createdMall);
};

// Get all malls
const getMalls = async (req, res) => {
    const malls = await Mall.find({});
    res.json(malls);
};

// Get a single mall by ID
const getMallById = async (req, res) => {
    const mall = await Mall.findById(req.params.id);

    if (mall) {
        res.json(mall);
    } else {
        res.status(404).json({ message: 'Mall not found' });
    }
};

// Update a mall
const updateMall = async (req, res) => {
    const { name, location, address, openingDate, closingDate, coverImage } = req.body;

    const mall = await Mall.findById(req.params.id);

    if (mall) {
        mall.name = name || mall.name;
        mall.location = location || mall.location;
        mall.address = address || mall.address;
        mall.openingDate = openingDate || mall.openingDate;
        mall.closingDate = closingDate || mall.closingDate;
        mall.coverImage = coverImage || mall.coverImage;

        const updatedMall = await mall.save();
        res.json(updatedMall);
    } else {
        res.status(404).json({ message: 'Mall not found' });
    }
};

// Delete a mall
const deleteMall = async (req, res) => {
    const mall = await Mall.findById(req.params.id);

    if (mall) {
        await mall.remove();
        res.json({ message: 'Mall removed' });
    } else {
        res.status(404).json({ message: 'Mall not found' });
    }
};

module.exports = {
    createMall,
    getMalls,
    getMallById,
    updateMall,
    deleteMall,
};