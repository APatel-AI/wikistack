const express = require('express');
const morgan = require('morgan');
const app = express();


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
          <h1> ${content} </h1> 
        </body>
      </html>
    `;
  
    res.send(layout('Hello, world!'));
  });
  

app.listen(3000, 'localhost') ;
