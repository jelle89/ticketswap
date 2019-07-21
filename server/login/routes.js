const express = require("express");
const User = require("../users/model");
const router = express.Router();
const bcrypt = require("bcrypt");
const { toJWT, toData } = require("./jwt");

router.post("/login", function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  console.log("User try login w:", email, password);

  if (email != undefined && password != undefined && password != "") {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(entity => {
        if (!entity) {
          res.status(400).send({
            message: "User with that email does not exist"
          });
        }

        if (bcrypt.compareSync(req.body.password, entity.password)) {
          res.send({
            jwt: toJWT({ userId: entity.id })
          });
        } else {
          res.status(400).send({
            message: "Password incorrect"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error"
        });
      });
  } else {
    res.status(400).send({
      message: "Please supply a valid email and password"
    });
  }
});

module.exports = router;
