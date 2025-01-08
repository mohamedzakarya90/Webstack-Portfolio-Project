import React, { useState } from 'react';
import axios from 'axios';

const SnippetEditor = () => {
    const [title, setTitle] = useState('');
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('javascript');
    const [output, setOutput] = useState('');

    const handleExecute = async () => {
        try {
            const response = await axios.post('/api/snippets/execute', { code, language });
            setOutput(response.data.output);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSave = async () => {
        try {
            await axios.post('/api/snippets', { title, code, language });
            // Optionally handle success
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Snippet Title" />
            <textarea value={code} onChange={(e) => setCode(e.target.value)} placeholder="Write your code here..." />
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                {/* Add more languages as needed */}
            </select>
            <button onClick={handleExecute}>Execute</button>
            <button onClick={handleSave}>Save Snippet</button>
            <pre>{output}</pre>
        </div>
    );
};

export default SnippetEditor;
