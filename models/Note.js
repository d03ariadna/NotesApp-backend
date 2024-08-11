const { Schema, model } = require('mongoose');

const NoteSchema = Schema({

    title: {
        type: String
    },
    content: {
        type: String
    },
    category: {
        type: String,
    },
    archived: {
        type: Boolean,
        default: false
    },

});


NoteSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id
    return object;
})

module.exports = model('Note', NoteSchema);