const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/MainPage.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/LoginPage.html'));
});

app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/SigninPage.html'));
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to: http://localhost:${port}/`));