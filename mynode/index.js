const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the API: Pranav Chandran'
    });
});

app.get('/login', (req, res) => {
    res.json({
        message: 'Login page'
    });
});

app.get('/signup', (req, res) => {
    res.json({
        message: 'Signup page'
    });
});


// listen
app.listen(3000, () => {
    console.log('listening on port 3000');
});
