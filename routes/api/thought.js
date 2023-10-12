const express = require('express');
const router = express.Router();

const thoughtController = require('../../controllers/thought-controller');

router.get('/thoughts', thoughtController.getThoughts);
router.get('/thoughts/:thoughtId', thoughtController.getThoughtById);
router.post('/thoughts', thoughtController.createThought);
router.put('/thoughts/:thoughtId', (req, res) => {
    const { thoughtId } = req.params;
    const updatedThoughtData = req.body;

    Thought.findByIdAndUpdate(
        thoughtId,
        updatedThoughtData,
        { new: true, runValidators: true },
        (err, updatedThought) => {
            if (err) {
                res.status(400).json({ error: err.message });
            } else {
                res.status(200).json(updatedThought);
            }
        }
    );
});
router.delete('/thoughts/:thoughtId', (req, res) => {
    
});

module.exports = router;