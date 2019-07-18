const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");
const auth = require('../login/authmw')

const router = new Router();

router.post("/users",  (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash
      });
      user
        .save()
        .then(result => {
          console.log(result);
          res.status(201).json({
            message: "User created"
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
    }
  });

  router.get("/users",  (req, res, next) => {
    // console.log("aut", auth)
    console.log("try to login.")
    User.findAll()
      .then(users => {
        res.send({ users });
      })
      .catch(error => next(error));
  });

  router.get("/users/:id", (req, res, next) => {
    User.findByPk(req.params.id)
      .then(user => {
        res.send({ name: user.name });
      })
      .catch(error => {
        res.status(500).send({
          message: "something went wrong".next(error)
        });
      });
  });
});
module.exports = router;
