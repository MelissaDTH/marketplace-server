const Sequelize = require("sequelize");
const db = require("../db");

const Categories = db.define('categories', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  picture: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'Categories'
})

module.exports = Categories