const Sequelize = require("sequelize");
const sequelize = require("../db");
const User = require("../users/model");
const Ticket = require("../tickets/model");

const Events = sequelize.define(
  "events",
  {
    name: {
      type: Sequelize.STRING,
      unique: true
    },
    description: {
      type: Sequelize.STRING
    },
    picture: {
      type: Sequelize.STRING
    },
    start: {
      type: Sequelize.STRING
    },
    end: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false,
    tableName: "events"
  }
);

Events.belongsTo(User)
//Event.hasMany(Ticket)
module.exports = Events;
