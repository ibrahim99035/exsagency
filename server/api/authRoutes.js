// backend/routes/authRoutes.js
const express = require('express');
const {
    registerUser,
    authUser,
    getUserProfile,
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Register new user
router.post('/register', registerUser);

// Login user
router.post('/login', authUser);

// Get user profile (protected route)
router.get('/profile', protect, getUserProfile);

module.exports = router;