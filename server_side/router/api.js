const express = require('express');
const router = express.Router();

// Replace this with actual storage mechanism (database, file system, etc.)
let notes = [];

// Get all notes
router.get('/notes', (req, res) => {
  res.json(notes);
});

// Create a new note
router.post('/notes', (req, res) => {
  const newNote = req.body;
  console.log(req.body);
  notes.push(newNote);
  console.log(notes);
  res.status(201).json(newNote);
});

// Delete a note by index
router.delete('/notes/:index', (req, res) => {
  const index = req.params.index;
  if (index >= 0 && index < notes.length) {
    notes.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ message: 'Note not found' });
  }
});

module.exports = router;
