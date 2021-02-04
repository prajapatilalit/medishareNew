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

app.get("/", (req, res) => {
  User.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/patient", (req, res) => {
  const user = new User({
    UID: req.body.UID,
    patient_name: req.body.patient_name,
    patient_email: req.body.patient_email,
    password: req.body.password,
    patient_phone_no: req.body.patient_phone_no,
  });
  user
    .save()
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/delete", (req, res) => {
  User.findByIdAndDelete(req.body.id)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/update", (req, res) => {
  User.findByIdAndUpdate(req.body.id, {
    UID: req.body.UID,
    patient_name: req.body.patient_name,
    patient_email: req.body.patient_email,
    password: req.body.password,
    patient_phone_no: req.body.patient_phone_no,
  })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log("server running at port 8000");
});
