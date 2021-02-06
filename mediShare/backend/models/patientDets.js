const mongoose = require("mongoose");   
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;
const patSchema = require('./patientModel').patientSchema;

const patDets = new Schema({
    /*
    userinfo: {
        type: ObjectId,
        ref: 'patients'
    },
    */
    patient: patSchema,

    //name:patSchema,

    age: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    bloodgroup: {  
        type: String,
        required: true
    },

    allergies: {
        type: String,
        required: true,
    },

    occur_cond: {
        type: String,
        required: true,
    },

    medication: {
        type: String,
        required: true,
    },

    emergency_no: {
        type: Number,
        required: true
    }
    
}, { timestamps: true });

//patDets.index({bloodgroup: 'text'})

const patdts = new mongoose.model('patdets', patDets);

module.exports = patdts;