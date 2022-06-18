const mongoose = require('mongoose');
const express = require('express');

const app = express();

const DATABASE = 'mongodb://mymongo:27017/test';

mongoose.connect(DATABASE)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World Pranav C'
    });
});

app.listen(8000, () => console.log('Server started on port 8000'));