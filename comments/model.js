const Sequelize = require("sequelize");
const db = require("../db");

const Comments = db.define('comment', {
  comment: {
    type: Sequelize.TEXT,
    allowNull: false
  },
}, {
  timestamps: false,
  tableName: 'Comments'
})

module.exports = Comments