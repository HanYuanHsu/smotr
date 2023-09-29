const mongoose = require('mongoose');
const config = require('config');
const MONGODB_URI = config.get('development.MONGODB_URI') // the URI of the database

mongoose.connect("mongodb://127.0.0.1:27017/smotr").then(() => {
    console.log('MongoDB connection successful.');
}).catch(err => {
    console.log(`MongoDB connection error: ${JSON.stringify(err, undefined, 2)}`);
});

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'Full name can\'t be empty',
        unique: true
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength: [5, 'Password must be atleast 5 character long']
    },
    textData: [{ body: String, date: Date }]
});

mongoose.model('User', userSchema);
