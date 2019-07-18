const express = require("express");
const Ticket = require("./model.js");
const router = express.Router();
const Event = require("../events/model")

// router.post("/events/:id/tickets", function(req, res, next) {

//   const ticket = {
//     price: req.body.price,
//     description: req.body.description,
//     author: req.body.author,
//     eventId: id
//   };
//   Ticket.create(ticket)
//     .then(ticket => res.status(201).json(ticket))
//     .catch(err => {
//       next(err);
//     });
// });
router.get('/tickets/:id', (req, res, next) => {
  console.log('hello from GET tickets id',req.params.id)
   
  Ticket
  .findAll({where: {eventId: req.params.id }})
    .then(ticket => {
      res
        .status(200)
        .send(ticket)
    }).catch(next)
})


router.get('/ticketdetails/:id', (req, res, next) => {
  console.log('hello from GET tickets specific ticket id',req.params.id)
   
  Ticket
  .findOne({where: {id: req.params.id }})
    .then(ticket => {
      res
        .status(200)
        .send(ticket)
    }).catch(next)
})


router.post('/events/:id', function (req, res,next) {
  const ticket = {
    price: req.body.price,
    description: req.body.description,
    author: req.body.author,
    eventId: req.params.id
  }
Ticket
  .create(ticket)
  .then(ticket => res.status(201).json(ticket))
  .catch(err => {next(err)})
})

// router.get('/events/:id/tickets', function (req, res, next) {
//   const id = req.params.id
//   Ticket
//     .findByPk(
//       id,
//       {
//         include: [Player, Category ]
//       }
//     )
//     .then(game => {
//       const json = JSON.stringify(game)
//       stream.updateInit(json)

//       return res
//         .status(200)
//         .send(json)
//     }).catch(next)
// })


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
