const { default: mongoose } = require("mongoose");

mongoose.pluralize(null);

const loginSchema = new mongoose.Schema({
  
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("Login", loginSchema);
