const Sequelize = require("sequelize");
const db = require("../db");

const Products = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  seller: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  picture: {
    type: Sequelize.TEXT,
  },
  price: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  color: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, {
  tableName: 'Products'
}) 

module.exports = Products