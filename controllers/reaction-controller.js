const { Thought } = require('../models');

module.exports = {
    // Get all reactions for a thought
    async getReactions(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
                .select('reactions');

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(thought.reactions);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Create a reaction for a thought
    async createReaction(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            const newReaction = {
                reactionBody: req.body.reactionBody,
                username: req.body.username,
            };

            thought.reactions.push(newReaction);

            const updatedThought = await thought.save();

            res.json(updatedThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Delete a reaction from a thought
    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            // Find index of reaction to remove
            const reactionIndex = thought.reactions.findIndex(
                (reaction) => reaction._id.toString() === req.params.reactionId
            );

            if (reactionIndex === -1) {
                return res.status(404).json({ message: 'No reaction with that ID' });
            }

            // Remove the reaction
            thought.reactions.splice(reactionIndex, 1);

            const updatedThought = await thought.save();

            res.json(updatedThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
