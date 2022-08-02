require('dotenv').config();

const express = require('express');
const router = require('./app/routers');
const app = express();
const port = process.env.PORT || 3018;

const path = require('path');
const cors = require('cors');
const bodySanitizer = require('./app/middlewares/bodySanitizer');
const multer = require('multer');
const bodyParser = multer();

app.use(cors({ origin: true }));

// app.use(express.urlencoded({ extended: true }));

app.use(bodySanitizer);

/* This is telling Node to serve the files for the built React app. */
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

/* Parsing the body of the request. */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
