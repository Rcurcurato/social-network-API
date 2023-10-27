const express = require('express');
const app = express();
const connection = require('./config/connection.js')

app.use(express.json());

// const userRoutes = require('./routes/api/users.js');
// const thoughtRoutes = require('./routes/api/thought.js');
// const reactionRoutes = require('./routes/api/reactions.js');
const routes = require('./routes/index.js');
// app.use('/api/users', userRoutes);
// app.use('/api/thoughts', thoughtRoutes);
// app.use('/api/reactions', reactionRoutes);
app.use(routes);
const PORT = process.env.PORT || 3000;
connection.once('open', () => {

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)

    })

});