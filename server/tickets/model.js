const Sequelize = require("sequelize");
const sequelize = require("../db");
const Event = require("../events/model");
const User = require("../users/model");
const Comment = require("../comments/model");

const Ticket = sequelize.define(
  "Ticket",
  {
    price: {
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.STRING
    },
    author: {
      type: Sequelize.STRING
    },
    eventId: {
      type: Sequelize.INTEGER
    },
  //   userId: {
  //     type: Sequelize.INTEGER
  //   }
  },
  {
    timestamps: true,
    tableName: "tickets"
  }
);
Ticket.associate = function(models) {
  Ticket.belongsTo(Event, {
    foreignKey: 'eventId',
    as: 'events'
  })
  Ticket.belongsTo(User, {
    foreignKey: 'userId',
    as: 'users'
  })
  Ticket.hasMany(Comment, {
    as: 'comments'
  })
}

module.exports = Ticket;
