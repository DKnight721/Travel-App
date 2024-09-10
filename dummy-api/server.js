// server.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const fs = require('fs');
const path = require('path');

app.use(cors());

app.get('/api/flights', (req, res) => {
    const filePath = path.join(__dirname, 'Data', 'Flights.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading flights.json file:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.get('/api/airports', (req, res) => {
    const filePath = path.join(__dirname, 'Data', 'Airports.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading airports.json file:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});