const Sequelize = require("sequelize");
const db = require("../db");

const Users = db.define("user", {
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: "Users"
  }
);

module.exports = Users;
