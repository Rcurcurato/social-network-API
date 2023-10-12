const express = require('express');
const router = express.Router();

const reactionController = require('../../controllers/reaction-controller');

router.get('/thoughts/:thoughtId/reactions', reactionController.createReaction);
router.post('/thoughts/:thoughtId/reactions', reactionController.getReactions);
router.delete('/thoughts/:thoughtId/reactions/:reactionId', reactionController.deleteReaction);

module.exports = router;