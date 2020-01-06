const Categories = require("./categories/model");
const Products = require("./products/model");
const Users = require("./users/model");
const Comments = require("./comments/model");

Products.belongsTo(Users)
Users.hasMany(Products)

Products.belongsTo(Categories)
Categories.hasMany(Products)

Comments.belongsTo(Products)
Products.hasMany(Comments)

Comments.belongsTo(Users)
Users.hasMany(Comments)
