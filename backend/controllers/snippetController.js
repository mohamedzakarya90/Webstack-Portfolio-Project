const Snippet = require('../models/Snippet');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

exports.createSnippet = async (req, res) => {
    const { title, code, language } = req.body;
    const snippet = new Snippet({ title, code, language, user: req.user.id });
    try {
        await snippet.save();
        res.status(201).json(snippet);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getSnippets = async (req, res) => {
    try {
        const snippets = await Snippet.find({ user: req.user.id });
        res.json(sn ippets);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.executeSnippet = async (req, res) => {
    const { code, language } = req.body;
    const filePath = path.join(__dirname, 'temp', `snippet.${language.extension}`);
    fs.writeFileSync(filePath, code);

    exec(`${language.command} ${filePath}`, (error, stdout, stderr) => {
        if (error) {
            return res.status(400).json({ error: stderr });
        }
        res.json({ output: stdout });
    });
};
