const express = require("express");
const Ticket = require("./model.js");
const router = express.Router();
const Event = require("../events/model");

router.get("/events/:id", (req, res, next) => {
  console.log("testing", req.params.id);

  Ticket.findAll({ where: { eventId: req.params.id } })
    .then(ticket => {
      res.status(200).send(ticket);
    })
    .catch(next);
});

router.get("/ticketdetails/:id", (req, res, next) => {
  console.log("test", req.params.id);

  Ticket.findOne({ where: { id: req.params.id } })
    .then(ticket => {
      res.status(200).send(ticket);
    })
    .catch(next);
});

router.post("/events/:id", function(req, res, next) {
  const ticket = {
    price: req.body.price,
    description: req.body.description,
    author: req.body.author,
    eventId: req.params.id
  };
  Ticket.create(ticket)
    .then(ticket => res.status(201).json(ticket))
    .catch(err => {
      next(err);
    });
});

router.delete("/events/:id", function(req, res, next) {
  Ticket.destroy({
    where: { name: req.body.name }
  })
    .then(ticket => {
      res.json({ ticket: ticket });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
