const mongoose = require('mongoose');

const SnippetSchema = new mongoose.Schema({
    title: { type: String, required: true },
    code: { type: String, required: true },
    language: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User ' },
}, { timestamps: true });

module.exports = mongoose.model('Snippet', SnippetSchema);
