const mongoose = require('mongoose');

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
        minlength: [5, 'Password must be at least 5 character long']
    },
});

mongoose.model('User', userSchema);
