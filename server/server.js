const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');

const { errorHandler } = require('./middleware/errorHandler');
const { logger } = require('./middleware/logger'); 
const { notFound } = require('./middleware/notFound');

// Import Routes
const authRoutes = require('./routes/authRoutes');
const applicationRoutes = require('./routes/applicationRoutes');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(logger); // Add the custom logger middleware
app.use(express.json({ limit: '50mb' })); // For handling JSON and large data (like base64 images)
app.use(cors()); // Enable Cross-Origin Resource Sharing 
app.use(morgan('dev')); // HTTP request logger for development

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/records', applicationRoutes);
app.get('/', async (req, res)=>{
    res.status(200).json({message: "<h1>Welcom TO EX's Server</h1>"}); 
})

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

// Server listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});