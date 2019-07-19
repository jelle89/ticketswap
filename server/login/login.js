const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../users/model");
const config = require("config");

router.post("/logins", (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send("An email and password are required");
  }
  User.findOne({ where: { email: req.body.email } })
    .then(dbUser => {
      console.log("got somet", dbUser);
      if (dbUser && bcrypt.compareSync(req.body.password, dbUser.password)) {
        console.log("passwords komen overeen");
        const token = jwt.sign({ id: dbUser.id }, "secret");
        console.log("tokkenenenes", token);
        res.send({ token });
      } else {
        res.status(400).send("Incorrect email and password combination");
      }
    })
    .catch(e => next(e));
});

module.exports = router;
