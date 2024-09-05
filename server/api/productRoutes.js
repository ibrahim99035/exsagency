// backend/routes/productRoutes.js
const express = require('express');
const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

const router = express.Router();

// Public routes
router.get('/', getProducts);
router.get('/:id', getProductById);

// Protected routes for creating, updating, and deleting products
router.post('/', protect, authorizeRoles('admin', 'moderator'), createProduct);
router.put('/:id', protect, authorizeRoles('admin', 'moderator'), updateProduct);
router.delete('/:id', protect, authorizeRoles('admin', 'moderator'), deleteProduct);

module.exports = router;