const db = require("./db");
const Users = require("./users/model");
const Products = require("./Products/model");
const Comments = require("./comments/model")

db.sync({ force: true })
  .then(() =>
    Promise.all([
      Products.destroy({
        where: {}
      }),
      Users.destroy({
        where: {}
      }),
      Products.destroy({
        where: {}
      }),
      Comments.destroy({
        where: {}
      }),
      // USER
      Users.create({
        fullName: "Bram Richards",
        password: "$2b$10$JZ5ItMKfLxlFbTUu9d.bA.Evar83Esj7gXXKcJ5RJhto9Epgt9bQe" //bram
      }),
      Users.create({
        fullName: "Mel Evans",
        password: "$2b$10$VtM.I0WO2LbDTbbAHvMavu6IL4AmoOyojXf6gjnjsSB3THQ8qYH2q" //mel
      }),
      Users.create({
        fullName: "Amber Rodriguez",
        password: "$2b$10$Eu2AyBWuFSf.uYH3nj4yfePj8e.rHfGYWHRbOa5EBJgkvbK4lPQG2" //am
      }),
      Users.create({
        fullName: "Chris Lewis",
        password: "$2b$10$NSU6xf5Z3PyYW9lG4f6gAOx1jHuhi5KEt3gjygjgsxI1XE8r0aeaO" //c
      }),
      Users.create({
        fullName: "Christopher Miller",
        password: "$2b$10$NSU6xf5Z3PyYW9lG4f6gAOx1jHuhi5KEt3gjygjgsxI1XE8r0aeaO" //c
      })
    ])
    )
    .then(() => console.log("--- Database is seeded ---"))
    .catch(console.error);
  
