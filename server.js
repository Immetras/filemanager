const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const hbs = require("express-handlebars");
const fs = require("fs");
// const { mainModule } = require("process");
// const formidable = require("formidable");

app.use(express.static("static"));

const context = {
  root: [],
};

//*

app.get("/", function (req, res) {
  res.redirect("/filemanager");
});

app.get("/filemanager", function (req, res) {
  res.render("files.hbs");
});

//* hbs things
app.set("views", path.join(__dirname, "static/views"));
app.engine(
  "hbs",
  hbs({
    defaultLayout: "main.hbs",
    extname: ".hbs",
    helpers: {},
    partialsDir: "static/views/partials",
  })
);
app.set("view engine", "hbs");

app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT);
});
