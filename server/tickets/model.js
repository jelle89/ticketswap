const Sequelize = require('sequelize')
const sequelize = require('../db')
const Events = require('../events/model')
const User = require('../users/model')

const Ticket = sequelize.define('ticket', {
  price: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.STRING
  },
  author: {
    type: Sequelize.STRING
  },
  ticketId: {
    type: Sequelize.INTEGER
  },
  eventId: {
    type: Sequelize.INTEGER
  }
}, {
    timestamps: true,
    tableName: 'ticket'
  })
  
  Ticket.belongsTo(User)
  
  
  
  //Hamster.belongsTo(Events)
  // Comment.belongsTo(Ticket)

  // Comment.associate = function(models) {
  //   Comment.belongsTo(Ticket, {
  //     foreignKey: 'ticketId',
  //     as: 'tickets'
  //   })
  //   Comment.belongsTo(User, {
  //     foreignKey: 'userId',
  //     as: 'users'
  //   })
  // } 
module.exports = Ticket