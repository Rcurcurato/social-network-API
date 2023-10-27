const express = require('express');
const router = express.Router();

const reactionController = require('../../controllers/reaction-controller');

router.get('/', reactionController.getReactions);
router.post('/:thoughtId/createReaction', reactionController.createReaction);
router.delete('/:thoughtId/deleteReaction/:reactionId', reactionController.deleteReaction);


module.exports = router;