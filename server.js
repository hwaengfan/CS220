const express = require('express');
const app = express();
const path = require('path');
const loginValidation = require(path.join(__dirname, 'public/js/LoginValidation.js'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Get requests
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/MainPage.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/LoginPage.html'));
});

app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/SigninPage.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Services.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/AboutUs.html'));
});

// Post requests
app.post('/login-validation', (req, res) => {
    loginValidation(req, res);
});

// Listen
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to: http://localhost:${port}/`));