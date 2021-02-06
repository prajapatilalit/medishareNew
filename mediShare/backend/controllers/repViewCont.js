require("dotenv").config();
const AWS = require('aws-sdk');
const fs = require('fs');
const ptRept = require('../models/patReport');

const filePath = req.location;
const bucketName = process.env.BUCKET_NAME;
const key = 'data/data.json';
const IAM_USER_KEY = process.env.S3_ACCESS_KEY;
const IAM_USER_SECRET = process.env.S3_ACCESS_SECRET;

var s3 = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET
});


const downloadFile = (filePath, bucketName, key) => {
  const params = {
    Bucket: bucketName,
    Key: key
  };
  s3.getObject(params, (err, data) => {
    if (err) console.error(err);
    fs.writeFileSync(filePath, data.Body.toString());
    console.log(`${filePath} has been created!`);
  });
};

const dwldfile = downloadFile(filePath, bucketName, key);

module.exports = dwldfile;