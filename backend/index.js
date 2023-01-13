const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const { profile } = require("console");

app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

app.post("/test-post", (req, res) => {
  console.log(req.body);
});

app.get("/test-get", (req, res) => {
  console.log(req.query);
});

app.listen(3001, () => {
  console.log("server running port 3001");
});
