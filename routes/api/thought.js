const express = require('express');
const router = express.Router();

const thoughtController = require('../../controllers/thought-controller');

router.get('/', thoughtController.getThoughts);
router.get('/:thoughtId', thoughtController.getThoughtById);
router.post('/', thoughtController.createThought);
router.put('/:thoughtId', (req, res) => {
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
router.delete('/:thoughtId', (req, res) => {
    
});

module.exports = router;