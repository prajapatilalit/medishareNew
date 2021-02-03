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
    required: true,
  },

  patient_email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    sparse: true,
  },

  password: {
    type: String,
    required: true,
  },

  patient_phone_no: {
    type: Number,
    required: true,
  },
});

mongoose.model("patients", patientModelSchema);

// module.exports = users;
