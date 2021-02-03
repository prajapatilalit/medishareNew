const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const port = 8000;
require("./model/patientModel");
app.use(bodyParser.json());

const User = mongoose.model("patients");

const mongoUri =
  "mongodb+srv://lalit:frenzy97@mern-proj.ncmqq.mongodb.net/social-media-db?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to database Successfully");
});
mongoose.connection.on("error", (err) => {
  console.log("Error failed to connect database");
});

app.get("http://localhost:8000/catalog/patients/:id", (req, res) => {
  res.send("Welcome");
});

app.post("/patient", (req, res) => {
  console.log(req.body);
  res.send("posted");
});

app.listen(port, () => {
  console.log("server running at port 8000");
});
