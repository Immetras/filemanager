const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const hbs = require("express-handlebars");
const Datastore = require("nedb");
const { mainModule } = require("process");
const formidable = require("formidable");

app.use(express.static("static"));

const context = {
  root: [],
};

//*
//// app.get("/", function (req, res) {
////   res.render("upload.hbs", context);
//// });
//// app.post("/handleUpload", function (req, res) {
////   let form = formidable({});
////   form.keepExtensions = true;

////   form.uploadDir = __dirname + "/static/upload/";

////   form.parse(req, function (err, fields, files) {
////     let wys = [];
////     wys.push(fields);
////     // let obj = {};
////     // wys.push(obj);
////     console.log(wys);

////     res.header("content-type", "application/json");
////     res.send(JSON.stringify(wys, null, 4));
////   });
//// });

//// app.get("/filemanager", function (req, res) {
////   res.render("filemanager.hbs");
//// });

//// app.get("/info", function (req, res) {
////   res.render("info.hbs");
//// });

app.get("/", function (req, res) {
  res.render();
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
