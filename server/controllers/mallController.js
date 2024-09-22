const Mall = require('../models/Mall');

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

// Create a new mall
const createMall = async (req, res) => {
    const { name, location, address, openingDate, closingDate } = req.body;
    
    let coverImage = '';
    if (req.file) {
        const imagePath = path.join(__dirname, '../uploads', req.file.filename);
        coverImage = imageToBase64(imagePath);
        fs.unlinkSync(imagePath); // Optional: delete the image after converting to base64
    }

    const mall = new Mall({
        name,
        location,
        address,
        openingDate,
        closingDate,
        coverImage,
    });

    try {
        const createdMall = await mall.save();
        res.status(201).json(createdMall);
    } catch (error) {
        res.status(400).json({ message: 'Error creating mall', error });
    }
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
    const { name, location, address, openingDate, closingDate } = req.body;

    const mall = await Mall.findById(req.params.id);
    
    if (mall) {
        mall.name = name || mall.name;
        mall.location = location || mall.location;
        mall.address = address || mall.address;
        mall.openingDate = openingDate || mall.openingDate;
        mall.closingDate = closingDate || mall.closingDate;

        if (req.file) {
            const imagePath = path.join(__dirname, '../uploads', req.file.filename);
            mall.coverImage = imageToBase64(imagePath);
            fs.unlinkSync(imagePath); 
        }

        const updatedMall = await mall.save();
        res.json(updatedMall);
    } else {
        res.status(404).json({ message: 'Mall not found' });
    }
};

// Delete a mall using findByIdAndDelete
const deleteMall = async (req, res) => {
    const mall = await Mall.findByIdAndDelete(req.params.id);

    if (mall) {
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
    upload,
};