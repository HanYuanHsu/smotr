/**
 * database set-up code
 */

const mongoose = require('mongoose');
const config = require('config');
const MONGODB_URI = config.get('development.MONGODB_URI') // the URI of the database

mongoose.connect(MONGODB_URI, (err) => {
    if (!err) {
        console.log('MongoDB connection successful.');
    } else {
        console.log(`MongoDB connection error: ${JSON.stringify(err, undefined, 2)}`);
    }
});

require('./User-model');
