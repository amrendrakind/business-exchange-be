const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json('Welcome to Business Express Backend Server: Built on Express JS');
});

// Running port on 8000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});