const express = require('express');
const morgan = require('morgan');
const app = express();
const { html } = require('html-template-tag');

app.use(express.static('public'));


app.use(express.urlencoded({ extended: false }));



// GET / views/ 
const port = 1337
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });