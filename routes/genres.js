const express = require('express');
const genre = express.Router();

const genres = [
    { id: 1, name: 'Horror'},
    { id: 2, name: 'Action'},
    { id: 3, name: 'Romance'}
];

// Task: Create a service for managing the list of movie genres

function validateGenre(genre) {
    const schema = {
        name: JOI.string().min(3).required()
    };

    return JOI.validate(genre, schema);
}


// Get list of all genres
genre.get('/', (req, res) => {
    res.send(genres);
});

// Create a New Genre
genre.post('/', (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };

    genres.push(genre);
    res.send(genre);
});


// Update an existing Genre
genre.put('/:id', (req, res) => {
    const genre = genres.find(g => c.genre === parseInt(req.params.genre));
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    genre.name = req.body.name;
    res.send(genre);
});

// Delete an existing genre
genre.delete('/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');
  
    const index = genres.indexOf(genre);
    genres.splice(index, 1);
  
    res.send(genre);
  });

  // Gets the ID of the genre
  genre.get('/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');
    res.send(genre);
  });
  
  module.exports = genre;