//const addJobSchema = require("../../models/manageJob/jobSchema");
const addJobSchema = require("../../models/manageJob/jobSchema");

const addJobPost = async (req, res, next) => {
  console.log("xxx" , req.body);
  try {
    await new addJobSchema(req.body).save();
    res.send({ res: "successful..!" });
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).send({ error: "Failed to create job" });
  }
};


const addJobDelete = async (req, res, next) => {
  try {
    const job = await addJobSchema.deleteOne({ _id: req.params.id });
    if (job.acknowledged) {
      let view = await addJobSchema.find();
      res.send(view);
    } else {
      res.send({ message: "Record Not Found" });
    }
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).send({ error: "Failed to delete job" });
  }
};

const addJobPut = async (req, res) => {
  try {
    let data = await addJobSchema.findOneAndUpdate(
      { _id: req.params.id }, // Query condition based on the document's _id field
      { $set: req.body }, // Update object wrapped in $set to update specific fields
      { new: true } // Option to return the updated document
    );
    res.send(data);
  } catch (error) {
    console.error("Error updating job:", error);
    res.status(500).send({ error: "Failed to update job" });
  }
};

const addJobGet = async (req, res, next) => {
  try {
    let view = await addJobSchema.find();
    res.send(view);
  } catch (error) {
    console.error("Error retrieving jobs:", error);
    res.status(500).send({ error: "Failed to retrieve jobs" });
  }
};

module.exports = { addJobPost, addJobDelete, addJobPut, addJobGet };
