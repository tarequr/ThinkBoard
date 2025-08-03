const express = require('express');
const { getAllNotes, storeNote, updateNote, deleteNote } = require('../controllers/notesController');

const router = express.Router();

router.get('/', getAllNotes);
router.post('/', storeNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;