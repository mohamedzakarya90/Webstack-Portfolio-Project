const express = require('express');
const { createSnippet, getSnippets, executeSnippet } = require('../controllers/snippetController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authenticate);
router.post('/', createSnippet);
router.get('/', getSnippets);
router.post('/execute', executeSnippet);

module.exports = router;
