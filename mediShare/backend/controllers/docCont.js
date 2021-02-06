require("dotenv").config();
const patdts = require('../models/patientDets');
const pats = require('../models/patientModel');
const ptRept = require('../models/patReport');
const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const fs = require('fs');

module.exports = {

    patSearch: async(req, res, next) => {
    
        //const UID = req.params.query;
        try {

           const patd = await pats.findOne({UID: req.body.UID})
           
       
               const patdet = await patdts.findOne({'userinfo.UID': req.body.UID}).populate('userinfo', 'UID patient_name')
               
               res.json({message: 'success', data: patdet})
       }
        catch(err) {
           res.json(err.message)
               }
       },

    patRepUpld: async(req, res) => {

         const BUCKET_NAME = process.env.BUCKET_NAME;
         const IAM_USER_KEY = process.env.S3_ACCESS_KEY;
         const IAM_USER_SECRET = process.env.S3_ACCESS_SECRET;
         const s3bucket = new AWS.S3({
             accessKeyId: IAM_USER_KEY,
             secretAccessKey: IAM_USER_SECRET
            });

  const fileFilter = (req, file, cb) => {
    
    const filetypes = /jpeg|png|pdf|rtf|pages/;

    // Check ext
     const extname =  filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);
   
    if(mimetype && extname){
        return cb(null,true);
    } else {
        cb('Error: Invalid file type!');
    }
};

    multer({
    fileFilter,
    storage: multerS3({
      acl: 'public-read',
      s3: s3bucket,
      bucket: BUCKET_NAME,
      metadata: function (req, file, cb) {
  
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        const fileName = Date.now().toString() + "-" + file.originalname;
        cb(null, fileName);
      }
    })
  });
},

patDownRep: async(req, res) => {

  try {

         const id = req.params.id;
         const BUCKET_NAME = process.env.BUCKET_NAME;
         const IAM_USER_KEY = process.env.S3_ACCESS_KEY;
         const IAM_USER_SECRET = process.env.S3_ACCESS_SECRET;
         //const filePath = req.body.reportpath;

         
         const s3bucket = new AWS.S3({
          accessKeyId: IAM_USER_KEY,
          secretAccessKey: IAM_USER_SECRET
         });

         const { reportpath, key } = req.body;

         ptRept.findById(id).exec((err, data) => {
           if(err)
           throw err;
           else
           {
           const params = {
            Bucket: BUCKET_NAME,
            Key: key
          };
          s3bucket.getObject(params, (err, data) => {
            if (err) console.error(err);
            fs.writeFileSync(reportpath, data.Body.toString());
            res.json({message: 'download succes, report path created' + reportpath});
          });
         }
        })
       } catch (err) {
          res.json({err: err.message})
        }
}
}