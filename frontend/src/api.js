const API_URL = 'http://localhost:5000/api';

export const fetchSnippets = async () => {
    const response = await fetch(`${API_URL}/snippets`);
    return response.json();
};

