const express = require('express');

const {
    registerUser,
    authUser,
    getUserProfile,
    UserApproval,
    GetModerators,
    GetSingleModerators,
    DeleteModerator,
} = require('../controllers/authController');  

const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

const router = express.Router();

// Register new user
router.post('/register', registerUser);

// Login user
router.post('/login', authUser);

// Get user profile (protected route)
router.get('/profile', protect, getUserProfile);

// Admin route to approve a user
router.put('/approve/:id', protect, authorizeRoles('admin'), UserApproval);

// Moderator Handlers
router.get('/moderators', protect, authorizeRoles('admin'), GetModerators);

router.get('/moderators/:id', protect, authorizeRoles('admin'), GetSingleModerators);

router.delete('/moderators/:id', protect, authorizeRoles('admin'), DeleteModerator);


module.exports = router;