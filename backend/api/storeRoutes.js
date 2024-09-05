// backend/routes/storeRoutes.js
const express = require('express');
const {
    createStore,
    getStores,
    getStoreById,
    updateStore,
    deleteStore,
} = require('../controllers/storeController');
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

const router = express.Router();

// Public routes
router.get('/', getStores);
router.get('/:id', getStoreById);

// Protected routes for admins
router.post('/', protect, authorizeRoles('admin'), createStore);
router.put('/:id', protect, authorizeRoles('admin'), updateStore);
router.delete('/:id', protect, authorizeRoles('admin'), deleteStore);

module.exports = router;