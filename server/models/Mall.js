// backend/models/Mall.js
const mongoose = require('mongoose');

const mallSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    openingDate: {
        type: String,
        required: true,
    },
    closingDate: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String, // Storing base64-encoded image
        required: true,
    },
}, {
    timestamps: true,
});

const Mall = mongoose.model('Mall', mallSchema);

module.exports = Mall;