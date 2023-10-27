const User = require('../models/user');

module.exports = {
    // Create new user
    async createUser(req, res) {
        try {
            const newUser = new User(req.body);
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },

    // Get a list of all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //Get a single user by ID

    async getUserById(req, res) {
        try {
            const user = await User.findById(req.params.userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Update a user by ID
    async updateUser(req, res) {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                {_id:req.params.userId},
                {$set:req.body},
                { new: true, runValidators: true }
            );
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Delete user by ID
    async deleteUser(req, res) {
        try {
            const deletedUser = await User.findByIdAndRemove(req.params.userId);
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json({ message: 'User deleted successfully' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
};



