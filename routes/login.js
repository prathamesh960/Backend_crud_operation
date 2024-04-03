var express = require("express");
var router = express.Router();
//var findUser = require("../controllers/checkUniqueFields");
var loginAuth = require("../controllers/loginAuth");

//router.post("/", findUser);

// for the login page authentication
router.post("", loginAuth);

module.exports = router;
