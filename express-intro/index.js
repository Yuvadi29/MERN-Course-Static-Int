const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req,res) => {``
    res.send('ABOUT');
});

app.get('/contact', (req,res) => {
    res.send('CONTACT');
});

app.listen(PORT, () => {
    console.log(`Server Running at PORT ${PORT}`);
});

