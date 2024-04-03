// const mongoose = require("mongoose");
// const databaseConnection = mongoose.connect(
//   "mongodb://127.0.0.1:27017/Assignment"
// );
// // console.log("Connection Status: ", mongoose.ConnectionStates);
// // console.log("Current Connection Status: ", mongoose.connection.readyState);
// module.exports = databaseConnection;

// File: db/config.js

const mongoose = require('mongoose');

// MongoDB connection URL
const mongoURI = 'mongodb://localhost:27017/Assignment';

// MongoDB connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Remove or comment out the unsupported option buffertimeoutms
  // buffertimeoutms: 5000,
};

// Connect to MongoDB
mongoose.connect(mongoURI, options)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

module.exports = mongoose.connection;
