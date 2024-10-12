const Application = require('../models/Application');

// Create a new Application entry
exports.createApplication = async (req, res) => {
  try {
    const newApplication = new Application(req.body);
    const savedApp = await newApplication.save();
    res.status(201).json(savedApp);
  } catch (err) {
    res.status(500).json({ message: 'Error creating app', error: err });
  }
};

// Update status of a Application
exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { statusFlag } = req.body;
  try {
    const updatedForm = await Application.findByIdAndUpdate(
      id,
      { statusFlag },
      { new: true }
    );
    if (!updatedForm) {
      return res.status(404).json({ message: 'Form not found' });
    }
    res.status(200).json(updatedForm);
  } catch (err) {
    res.status(500).json({ message: 'Error updating status', error: err });
  }
};

// Get one Application by ID
exports.getApplicationmById = async (req, res) => {
  const { id } = req.params;
  try {
    const application = await Application.findById(id);
    if (!application) {
      return res.status(404).json({ message: 'Form not found' });
    }
    res.status(200).json(application);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching form', error: err });
  }
};

// Get all Application
exports.getAllApplication = async (req, res) => {
  try {
    const applications = await Application.find({}, 'brandName brandDescription email phone statusFlag'); // Only select specific fields
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving applications', error: error.message });
  }
};

// Get Applications by status
exports.getApplicationsByStatus = async (req, res) => {
  const { status } = req.params;
  try {
    const applications = await BrandForm.find({ statusFlag: status });
    if (applications.length === 0) {
      return res.status(404).json({ message: 'No forms found for the specified status' });
    }
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching forms by status', error: err });
  }
};