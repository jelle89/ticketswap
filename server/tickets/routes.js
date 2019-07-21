const express = require("express");
const Ticket = require("./model.js");
const router = express.Router();
const Event = require("../events/model");
const Comment = require("../comments/model");

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
  let calcRisk = 0;
  return Ticket.findOne({ where: { id: req.params.id } }).then(ticket => {
    console.log("risk", ticket.dataValues.risk);
    //if there are >3 comments on the ticket, add 5% to the risk
    return Comment.findAndCountAll({
      where: { ticketId: ticket.dataValues.id }
    })
      .then(commentsforTicket => {
        console.log("comms for ticket (cnt) ", commentsforTicket.count);
        let riskAddedByComments = 0;
        if (commentsforTicket.count > 3) {
          riskAddedByComments = 5;
        }
        return riskAddedByComments;
      })
      .then(riskAddedByComments => {
        //if the ticket was added during business hours (9-17), deduct 10% from the risk, if not, add 10% to the risk
        console.log("riskAddedByComments ", riskAddedByComments);
        return Ticket.findOne({ where: { id: req.params.id } }).then(ticket => {
          console.log("ticket again CA ", ticket.dataValues.createdAt);

          const ticketHourOfCreation = new Date(
            ticket.dataValues.createdAt
          ).getHours();
          console.log(
            " asdfasdfdasdfsadfsadf",
            new Date(ticket.dataValues.createdAt).getHours()
          );
          if (ticketHourOfCreation < 9) {
            return (riskAddedByComments += 10);
          } else if (ticketHourOfCreation > 17) {
            return (riskAddedByComments += 10);
          } else {
            return (riskAddedByComments -= 10);
          }
        });
        //if the ticket price is lower than the average ticket price for that event, that's a risk
        // if a ticket is X% cheaper than the average price, add X% to the risk
        // if a ticket is X% more expensive than the average price, deduct X% from the risk, with a maximum of 10% deduction
      })
      .then(riskAddedByComments => {
        console.log("riskAddedByComments avg trick price", riskAddedByComments);
        return Ticket.findAndCountAll({
          where: { eventId: ticket.dataValues.id }
        })
          .then(listOfTickets => {
            pricelist = listOfTickets.rows.map(tickets => {
              console.log("ticket in map is:", tickets.dataValues.price);
              return tickets.dataValues.price;
            });
            const reducer = (accumulator, currentValue) =>
              accumulator + currentValue;
            totaal = pricelist.reduce(reducer,0);
          
            if (totaal != 0){
              averagePrice = totaal / pricelist.length;
            }else{
              averagePrice = 0
            }
            console.log(averagePrice, "Average Price");
            console.log("totaal", totaal);
            console.log(pricelist, "pricelijst");
            //avgprice = total / alltickets

            //const reducer = (accumulator, currentValue) => accumulator + currentValue;
            //console.log(listOfTickets.rows.reduce(reducer));
          
            //console.log('listOfTicketS?', listOfTickets.rows.dataValues.price)
            //console.log('listOfTicketS?', listOfTickets.rows[2].dataValues.price)
            return totaal;
          })
          .then(totaal => {
            console.log(totaal, "again totaal ");
           return Ticket.findOne({ where: { id: req.params.id } })
              .then(priceOneTicket => {
                console.log("priceOneTicket", priceOneTicket.dataValues.price);
                priceOneTicket.dataValues.price;
                
              const priceOneTicketCalc = priceOneTicket.dataValues.price;
              if( totaal != 0) {
                if (priceOneTicketCalc < averagePrice) {
                  riskAddedByAverage = 100 - (priceOneTicketCalc / averagePrice) * 100;
                  console.log(riskAddedByAverage, ('ticket is goedkoper, dus risk hoger'))
                } else if (priceOneTicketCalc > averagePrice) {
                  riskAddedByAverage =
                    -(100 - (averagePrice / priceOneTicketCalc) * 100)
                    console.log(riskAddedByAverage, ('ticket is duurder, dus risk lager'))
                    if (riskAddedByAverage < -10) riskAddedByAverage = -10
                }
              }else{
                riskAddedByAverage = 0
              }

              const riskTotal =  riskAddedByComments + riskAddedByAverage
              console.log(riskAddedByComments, "riskAddedByComments+timecreatedat");
              console.log(riskAddedByAverage, "riskaddedbyaverage99999999999");
              console.log(riskTotal, "riskaddedbytotal99999999999");

              return riskTotal;
          });
          
        }).then(riskTotal => {
          console.log(riskTotal, "totalrisk")
          return Ticket.findOne({ where: { id: req.params.id }})
          .then(ticketsPerAuthor => {
            console.log(ticketsPerAuthor.dataValues.author, 'ticketsperauthor authorrrrrr')
            return Ticket.findAndCountAll({where: {author : ticketsPerAuthor.dataValues.author}})
            .then(ticketsWithAuthor => {

              console.log("wat is bla?", ticketsWithAuthor.count)
              

              if(ticketsWithAuthor.count < 2) {
               riskTotal += 10
               
              }
              console.log(riskTotal, 'riskaddedbyauthor')
              return riskTotal
            
            })
          })
        })
        
       
      })
     

      .then(value => {
        let number = Math.min(Math.max(parseInt(value), 5), 95);
        console.log("can ik make frontend calc here?(with limited )", number);
        //console.log("can ik make frontend calc here? risk by comm" , riskAddedByComments)
        
        let ticketwrisk = {
          price: ticket.dataValues.price,
          description: ticket.dataValues.description,
          author: ticket.dataValues.author,
          eventId: ticket.dataValues.eventId,
          risk: number,
          createdAt: ticket.dataValues.createdAt,
          updatedAt: ticket.dataValues.updatedAt,
          userId: ticket.dataValues.userId
        };

        return ticketwrisk;
      
      })

      .then(ticket => {
        res.status(200).send(ticket);
      })
      .catch(next);
  });


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
