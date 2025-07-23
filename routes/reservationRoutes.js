const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../data/movies.json');

// Read movies data
function getMovies() {
    const data = fs.readFileSync(DATA_PATH);
    return JSON.parse(data);
}

// Save movies data
function saveMovies() {
    fs.writeFileSync(DATA_PATH, JSON.stringify(movies, null, 2));
}

// GET all movies
router.get('/movies', (req, res) => {
    const movies = getMovies();
    res.json(movies);
});

// GET seats for a movie
router.get('/movies/:id/seats', (req, res) => {
    const movies = getMovies();
    const movie = movies.find(m => m.id === req.params.id);
    if (!movie) return res.status(404).send('Movie not found');
    res.json(movie.seats);
});

// POST reserve a seat
router.post('/movies/:id/reserve', (req, res) => {
    const { seatNo } = req.body;
    const movies = getMovies();
    const movie = movies.find(m => m.id === req.params.id);

    if (!movie) return res.status(404).send('Movie not found');

    const seat = movie.seats.find(s => s.seatNo === seatNo);
    if (!seat) return res.status(404).send('Seat not found');
    if (seat.reserved) return res.status(400).send('Seat already reserved');

    seat.reserved = true;
    saveMovies(movies);
    res.send(`Seat ${seatNo} reserved successfully.`);
});

// POST cancel a reservation
router.post('/movies/:id/cancel', (req, res) => {
    const { seatNo } = req.body;
    const movies = getMovies();
    const movie = movies.find(m => m.id === req.params.id);

    if (!movie) return res.status(404).send('Movie not found');

    const seat = movie.seats.find(s => s.seatNo === seatNo);
    if (!seat) return res.status(404).send('Seat not found');
    if (seat.reserved) return res.status(400).send('Seat is not reserved');

    seat.reserved = false;
    saveMovies(movies);
    res.send(`Reservation for seat ${seatNo} canceled.`);
});

module.exports = router;