const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    snippets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Snippet' }],
}, { timestamps: true });

module.exports = mongoose.model('Tag', TagSchema);

