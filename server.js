const express = require('express');
const app = express();

const userRoutes = require('./routes/api/users.js');
const thoughtRoutes = require('./routes/api/thought.js');
const reactionRoutes = require('./routes/api/reactions.js');

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/reactions', reactionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)

});