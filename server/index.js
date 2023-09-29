const express = require('express');
const config = require('config');
const PORT = config.get('development.PORT');
const host = config.get('development.host');

const app = express();

// Parse URL-encoded data (form data)
app.use(express.urlencoded({ extended: false }));

// sets up database connection
require('./models/db-setup');

app.post('/search', (req, res) => {
    const formData = req.body;
    console.log("Here is the form data:");
    console.log(formData); // Access the form data here
});

const server = app.listen(PORT, host, (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server is running on ${host}:${PORT}`);
});
