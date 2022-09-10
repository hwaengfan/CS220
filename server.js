const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/about', (req, res) => {
    res.send("About Page");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to: http://localhost:${port}/`));