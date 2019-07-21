const express = require("express");
const Event = require("./model.js");
const router = express.Router();
const Ticket = require("../tickets/model");
const auth = require('../login/middleware')

router.get("/events", function(req, res, next) {
  console.log("body", req.body);
  const limit = req.query.limit = 9
  const offset = req.query.offset = 0
  Event.count()
    .then(total =>
      Event
    .findAll({limit, offset})
    .then(events => {
      let page = Math.ceil(total/limit);
      res.json({ events, total, page });
    })
    .catch(next))
})
;

router.post("/events", auth, function(req, res, next) {
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
