const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3123;

app.use(cors());
app.use(bodyParser.json());

app.post("/name", (req, res) => {
  res.status(200).json({ name: req.body.name });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
