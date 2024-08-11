/*
    Rutas de Notes
    host + /api/notes
*/

const { Router } = require('express');
const { createNote, getNotes, editNote, deleteNote } = require('../controllers/notesController');
const router = Router();

router.post('/', createNote);
router.get('/', getNotes);
router.put('/:id', editNote);
router.delete('/:id', deleteNote);


module.exports = router;