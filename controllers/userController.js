// controllers/userController.js

//const User = require('../models/User');
var loginSchema = require("../models/loginSchema");

exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = new loginSchema({ firstName, lastName, email, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
