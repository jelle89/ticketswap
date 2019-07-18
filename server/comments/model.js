const Sequelize = require('sequelize')
const sequelize = require('../db')
const Ticket = require('../tickets/model')
const User = require('../users/model')

const Comment = sequelize.define('Comment', {
  text: {
    type: Sequelize.INTEGER
  },
  author: {
    type: Sequelize.STRING
  }
}, {
    timestamps: false,
    tableName: 'comments'
  })

  Comment.associate = function(models) {
    Comment.belongsTo(Ticket, {
      foreignKey: 'ticket_id',
      as: 'tickets'
    })
    Comment.belongsTo(User, {
      foreignKey: 'user_id',
      as: 'users'
    })
  } 
module.exports = Comment