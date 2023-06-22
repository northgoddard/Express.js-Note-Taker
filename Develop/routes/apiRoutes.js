const api = require('express').Router();
const storage = require('../db/storage');

api.get('/notes', (req, res) => {
    storage
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

api.post('/notes', (req, res) => {
    storage
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

api.delete('/notes/:id', (req, res) => {
    storage
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(500).json(err));
});

module.exports = api;