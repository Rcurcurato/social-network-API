const { Schema, Types, model } = require('mongoose');
const reactionSchema = require('../models/reaction.js'); // Adjust the path as needed


const thoughtSchema = new Schema(
    {

    thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
},
    username: {
    type: String,
    required: true,
},
    createdAt: {
    type: Date,
    default: Date.now,
},
    reactions: [reactionSchema],
    },
{
    toJSON: {
        getters: true,
        }
}
);
const Thought = model('Thought', thoughtSchema);
module.exports = Thought;
