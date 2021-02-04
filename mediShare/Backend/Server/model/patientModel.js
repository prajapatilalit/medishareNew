const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require("shortid");

const patientModelSchema = new Schema({
  UID: {
    type: String,
    default: shortid.generate,
  },

  patient_name: {
    type: String,
  },

  patient_email: {
    type: String,

    unique: true,
    lowercase: true,
    sparse: true,
  },

  password: {
    type: String,
  },

  patient_phone_no: {
    type: String,
  },
});

mongoose.model("patients", patientModelSchema);

// module.exports = users;
