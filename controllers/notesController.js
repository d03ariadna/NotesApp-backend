const { response } = require("express");
const noteService = require("../services/noteService");


class NotesController {

    async createNote(req, res = response) {
        const newNote = req.body;

        try {
            const note = await noteService.createNote(newNote);
            res.status(201).json({
                ok: true,
                note
            });
        } catch (error) {
            res.status(400).json({
                ok: false,
                message: error.message
            });
        }
    }

    async getNotes(req, res = response) {
        try {
            const notes = await noteService.getNotes();
            res.json({
                ok: true,
                notes
            });

        } catch (error) {
            res.status(400).json({
                ok: false,
                message: error.message
            });
        }
    }

    async editNote(req, res = response) {
        const id = req.params.id;
        const newNote = req.body;

        try {
            const note = await noteService.editNote(id, newNote);
                res.json({
                ok: true,
                note
            });
            
        } catch (error) {
            res.status(400).json({
                ok: false,
                message: error.message
            });
        }
        
        
    }

    async deleteNote(req, res = response) {
        const id = req.params.id;

        try {
            const note = await noteService.deleteNote(id);
                res.json({
                ok: true,
                note
            });
            
        } catch (error) {
            res.status(400).json({
                ok: false,
                message: error.message
            });
        }
    }
}

module.exports = new NotesController();