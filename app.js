const express = require("express");
const morgan = require("morgan");
const app = express();
const { db } = require("./models");
const { db, Page, User } = require("./models");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res, next) => {
  const layout = (content) => `
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

  res.send(layout("Hello, world!"));
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const PORT = 3000;

const init = async () => {
  await Page.sync();
  await User.sync();
  // make sure that you have a PORT constant
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();

//app.listen(3000, "localhost");
