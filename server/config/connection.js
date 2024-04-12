const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/buddii');

console.log('Connected to MongoDB.');

module.exports = mongoose.connection;