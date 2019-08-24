/* eslint-disable no-console */
const express = require("express");
const { join } = require("path");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");

const port = process.env.SERVER_PORT || 3000;

app.use(morgan("dev"));
app.use(express.static(join(__dirname, "build")));

app.use((_, res) => {
  res.sendFile(join(__dirname, "build", "index.html"));
});
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactStudentList"
);

app.listen(port, () => console.log(`Listening on port ${port}`));
