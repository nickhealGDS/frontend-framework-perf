const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.get("/", (req, res) => {
  res.render("home", { layout: "index" });
});

app.get("/name", (req, res) => {
  res.render("name");
});

app.post("/name", (req, res) => {
  res.redirect("/summary");
});

app.get("/summary", (req, res) => {
  res.render("summary");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
