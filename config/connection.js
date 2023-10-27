const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/socialnetwork_db3');

module.exports = mongoose.connection;
