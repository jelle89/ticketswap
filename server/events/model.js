const Sequelize = require("sequelize");
const sequelize = require("../db");
const User = require("../users/model");
const Ticket = require('../tickets/model');

const Event = sequelize.define(
  "Event",
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
    },
    eventId: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false,
    tableName: "events"
  }
);

Event.belongsTo(User);
Event.hasMany(Ticket)
module.exports = Event;
