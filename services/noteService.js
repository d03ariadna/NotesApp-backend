const noteRepository = require("../repositories/noteRepository");

class NoteService{
    async createNote(note) {
        return await noteRepository.create(note);
    }

    async getNotes() {
        return await noteRepository.get();
    }

    async editNote(id, newNote) {
        return await noteRepository.edit(id, newNote);
    }

    async deleteNote(id) {
        return await noteRepository.delete(id);
    }
}


module.exports = new NoteService();