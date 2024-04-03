// var loginSchema = require("../models/loginSchema");
// const Jwt = require("jsonwebtoken");
// const jwtKey = "prerna";

// const loginAuth = async (req, resp) => {
//   console.log("req",req.body);
//   let loginSchema = await loginSchema
//     .findOne({ email: req.body.email })
//     .select("-password");
//   if (loginSchema) {
//     let pass = await loginSchema.findOne(req.body).select("-password");
//     if (pass) {
//       Jwt.sign({ loginSchema }, jwtKey, { expiresIn: "2h" }, (err, token) => {
//         if (err) {
//           resp.send({ message: "Something went wrong in Token Generation" });
//         }
//         resp.send({ loginSchema, auth: token });
//         //console.log("resp",{ loginSchema, auth: token });
//       });
//     } else resp.send({ message: "Invalid Password" });
//   } else resp.send({ message: "Email doesn't exist" });
// };
// module.exports = loginAuth;

var loginSchema = require("../models/loginSchema");
const Jwt = require("jsonwebtoken");
const jwtKey = "prerna";

const loginAuth = async (req, resp) => {
  let user = await loginSchema
    .findOne({ email: req.body.email })
    .select("-password");
  if (user) {
    let pass = await loginSchema.findOne(req.body).select("-password");
    if (pass) {
      Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          resp.send({ message: "Something went wrong in Token Generation" });
        }
        resp.send({ user, auth: token });
      });
    } else resp.send({ message: "Invalid Password" });
  } else resp.send({ message: "Email doesn't exist" });
};
module.exports = loginAuth;
