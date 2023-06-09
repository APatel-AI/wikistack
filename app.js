const express = require('express');
const morgan = require('morgan');
const app = express();
const {html} = require('html-template-tag');


app.use(express.static('public'));


app.use(express.urlencoded({ extended: false }));


// Routes
app.get('/', (req, res,next) => {
    const layout = (content) =>`
      <!DOCTYPE html>
      <html>
        <head>
          <title>WikiStack</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
          ${content}
        </body>
      </html>
    `;
  
    res.send(layout('Hello, world!'));
  });
  

const port = 3000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });