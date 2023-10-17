const express = require('express');
const config = require('config');
const PORT = config.get('development.PORT');
const host = config.get('development.host');

const mongoose = require("mongoose");

const app = express();

// Parse incoming requests as JSON
app.use(express.json());

// sets up database connection
require('./models/db-setup');

const User = mongoose.model('User');

/**
 * request body:
 * {
 * "fullName": "Kevin Hsu",
 * "email": "example@gmail.com",
 * "password": "0000"
 * }
 */
app.post('/register', (req, res) => {
    //const userData = req.body;
    const user = new User()
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save();
    res.status(200).send("Successfully registered.");
})

const server = app.listen(PORT, host, (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server is running on ${host}:${PORT}`);
});
