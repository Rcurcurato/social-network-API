const Thought = require('../models/thought'); // Import the Thought model

const thoughtControllers = {
    // Create a new thought
    async createThought(req, res) {
        try {
            const newThought = new Thought(req.body);
            const savedThought = await newThought.save();
            res.status(201).json(savedThought);
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },

    // Get a list of all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await
            Thought.find()
            .populate('reactions');
            
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },

    // Get a single thought by ID
    async getThoughtById(req, res) {
        try {
            const thought = await Thought
            .findById(req.params.thoughtId)
            .populate ('reactions');
            if (!thought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);

        }
    },
};

module.exports = thoughtControllers;    