const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
    {
        Id: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ]
    },
    {
        toJSON: {
            getters: true,
        }
    }
);
userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

module.exports = userSchema;
