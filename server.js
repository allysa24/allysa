const express = require('express');
const app = express();
const path = require('path');

// Use the environment port (for Render) or fallback to 3000 for local dev
const PORT = process.env.PORT || 3000;

// Serve static files directly from the root directory
app.use(express.static(__dirname));

// Route to serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Catch-all route for 404 errors (optional but recommended)
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
