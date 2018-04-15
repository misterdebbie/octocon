// Import dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

// Middleware stuffs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('build'));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});

//API route
app.use('/api/money', require('./routes/money-routes'));

// Setting up the port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
