const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// Register a new user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    console.log('Request body:', req.body); // Log the entire request body
    console.log('Destructured data:', { name, email, password }); // Log destructured values

    try {
        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user
        const user = await User.create({ name, email, password });
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        });
    } catch (err) {
        console.error('Error:', err.message);
        res.status(500).json({ message: err.message });
    }
};

// Authenticate user and get token (Login)
const authUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get the logged-in user's profile
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const UserApproval = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.approval = true;  // Set approval to true
        await user.save();

        res.json({ message: 'User approved successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const GetModerators = async (req, res) => {
    try {
        const moderators = await User.find({ role: 'moderator' });
        res.json(moderators);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const GetSingleModerators = async (req, res) => {
    try {
        const moderator = await User.findById(req.params.id);

        if (!moderator || moderator.role !== 'moderator') {
            return res.status(404).json({ message: 'Moderator not found' });
        }

        res.json(moderator);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const DeleteModerator = async (req, res) =>{
    try {
        const moderator = await User.findById(req.params.id);

        if (!moderator || moderator.role !== 'moderator') {
            return res.status(404).json({ message: 'Moderator not found' });
        }

        await User.findByIdAndDelete(req.params.id);  // Delete moderator by ID

        res.json({ message: 'Moderator deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    registerUser,
    authUser,
    getUserProfile,
    UserApproval,
    GetModerators,
    GetSingleModerators,
    DeleteModerator,
};