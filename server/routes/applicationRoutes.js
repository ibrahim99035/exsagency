const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');
// Create a new createApplication
router.post('/new-apply', applicationController.createApplication);

// Update the status of a BrandForm by ID
router.patch('/applications/status/:id', applicationController.updateStatus);

// Get a single BrandForm by ID
router.get('/applications/get-one/:id', applicationController.getApplicationmById);

// Get all BrandForms
router.get('/applications/get-all/',  applicationController.getAllApplication);

// Get BrandForms by status
router.get('/applications/get/status/:status',  applicationController.getApplicationsByStatus);

module.exports = router;