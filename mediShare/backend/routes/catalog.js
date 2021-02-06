const express = require("express");
const router = express.Router();
const patDtsCont = require("../controllers/patDetsCont");
const upload = require("../controllers/repUploadCont");
const uplReport = require("../models/patReport");
const doct = require("../controllers/docCont");

// routes for patient details

// POST request to create patient details
router.post(
  "/patients/create",
  patDtsCont.patDetsValidate("create_patDets"),
  patDtsCont.create_patDets
);

// GET request to display the specific patient details
//router.get('/patients/:id', patDtsCont.patDets);

// GET request to display all the patient details
router.get("/patients", patDtsCont.allPatDets);

// PUT request to update the specific patient details
router.put("/patients/:id/update", patDtsCont.patDetsUpd);

// DELETE request to delete the specific patient details
router.delete("/patients/:id/delete", patDtsCont.patDetsDel);

// GET REQUEST to search for patient details
router.get("/patients/search", patDtsCont.patSearch);

// POST request to upload patient report
router.post(
  "/doctors/uploadReport",
  upload.single("report"),
  async (req, res) => {
    try {
      const report = req.file;
      const reportpath = req.file.location;

      const newReport = new uplReport({ report, reportpath });

      const savedReport = await newReport.save();
      // req.flash("success", "PDF successfully uploaded");
      res.json({
        message: "success",
        report: savedReport,
        reportpath: reportpath,
      });
      //res.render("displayPage",  {savedReport: report, path: reportpath});
    } catch (err) {
      res.json({ status: "Upload failed", err: err.message });
    }
  }
);

// GET request to download the patient report
router.get("/doctors/reports/:id/download", doct.patDownRep);

module.exports = router;
