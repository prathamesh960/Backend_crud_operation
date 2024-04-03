const express = require("express");
const router = express.Router();
const {
  addJobPost,
  addJobDelete,
  addJobPut,
  addJobGet
} = require("../controllers/manageJob/jobRegister");

router.post("/add-job",addJobPost );

router.delete("/:id", addJobDelete);

router.put("/:id", addJobPut);

router.get("/get-job", addJobGet);

module.exports = router;