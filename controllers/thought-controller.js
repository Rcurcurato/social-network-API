const Thought = require('../models/Thought'); // Import the Thought model

module.exports = {
    // Create a new thought
    async createThought(req, res) {
        try {
            const newThought = new Thought(req.body);
            const savedThought = await newThought.save();
            res.status(201).json(savedThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Get a list of all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Get a single thought by ID
    async getThoughtById(req, res) {
        try {
            const thought = await Thought.findById(req.params.thoughtId);
            if (!thought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);

        }
    },
};