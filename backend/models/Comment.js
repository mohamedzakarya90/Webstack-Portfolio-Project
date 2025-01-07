const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    snippet: { type: mongoose.Schema.Types.ObjectId, ref: 'Snippet', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true },
    content: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Comment', CommentSchema);

