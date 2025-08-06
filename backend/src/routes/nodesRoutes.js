const express = require('express');
const { getAllNotes, storeNote, updateNote, deleteNote, getAllNoteById } = require('../controllers/notesController');

const router = express.Router();

router.get('/', getAllNotes);
router.post('/', storeNote);
router.put('/:id', updateNote);
router.get('/:id', getAllNoteById);
router.delete('/:id', deleteNote);

module.exports = router;