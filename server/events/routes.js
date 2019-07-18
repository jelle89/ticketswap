const express = require("express");
const Event = require("./model.js");
const router = express.Router();
const Ticket = require('../tickets/model')

router.get('/events/', function (req, res, next) {
  console.log("body", req.body)
  Event
      .findAll()
      .then(event => {res.json({ events: event })})
      .catch(next)
})


router.post("/events/", function(req, res, next) {
   
  const event = {
    name: req.body.name,
    description: req.body.description,
    picture: req.body.picture,
    start: req.body.start,
    end: req.body.end
  };
  Event.create(event)
    .then(event => res.status(201).json(event))
    .catch(err => {
      next(err);
    });
});


router.delete("/events/", function(req, res, next) {
  Event.destroy({
    where: { name: req.body.name }
  })
    .then(event => {
      res.json({ event: event });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
