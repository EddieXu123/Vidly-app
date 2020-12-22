// Imaginary Service for renting out movies

const JOI = require('joi');
const express = require('express');
const app = express();

const genre = require('./routes/genres');

app.use(express.json());
app.use('/api/genres', genre);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
