const Sequelize = require("sequelize");
const sequelize = require("../db");
const Ticket = require("../tickets/model");
const User = require("../users/model");

const Comment = sequelize.define(
  "Comment",
  {
    text: {
      type: Sequelize.STRING
    },
    author: {
      type: Sequelize.STRING
    },
    ticketId: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false,
    tableName: "comments"
  }
);

Comment.belongsTo(User);
Comment.belongsTo(Ticket);

module.exports = Comment;
