const Note = require("../models/Note");

class NoteRepository {
    async create(noteData) {

        const note = new Note(noteData);
        return await note.save();

    }

    async get() {

        const notes = await Note.find();
        return notes;
    }

    async edit(id, newNote) {
        
        const note = await Note.findById(id);

        if(!note) {
            throw new Error('Note not found');
        }

        const noteUpdated = await Note.findByIdAndUpdate(id, newNote, {new: true});
        
        return noteUpdated;
    }

    async delete(id) {
        
        const note = await Note.findById(id);

        if (!note) {
            throw new Error('Note not found');
        }

        await Note.findByIdAndDelete(id);
        return 'deleteNote';
    }

}

module.exports = new NoteRepository();