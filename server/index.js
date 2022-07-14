const express = require('express');
const path = require('path');
const app = express()
const port = 3001

/* This is telling Node to serve the files for the built React app. */
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => console.log(`Server listening on port ${port}!`))