const db = require("./db");
const Users = require("./users/model");
const Products = require("./products/model");
const Comments = require("./comments/model");
const Category = require("./categories/model");

db.sync({ force: true })
  .then(() =>
    Promise.all([
      Products.destroy({
        where: {}
      }),
      Users.destroy({
        where: {}
      }),
      Category.destroy({
        where: {}
      }),
      Comments.destroy({
        where: {}
      }),
      // USER
      Users.create({
        username: "BramRichards",
        password: "$2b$10$JZ5ItMKfLxlFbTUu9d.bA.Evar83Esj7gXXKcJ5RJhto9Epgt9bQe" //bram
      }),
      Users.create({
        username: "MelEvans",
        password: "$2b$10$VtM.I0WO2LbDTbbAHvMavu6IL4AmoOyojXf6gjnjsSB3THQ8qYH2q" //mel
      }),
      Users.create({
        username: "AmberRodriguez",
        password: "$2b$10$Eu2AyBWuFSf.uYH3nj4yfePj8e.rHfGYWHRbOa5EBJgkvbK4lPQG2" //am
      }),
      Users.create({
        username: "ChrisLewis",
        password: "$2b$10$NSU6xf5Z3PyYW9lG4f6gAOx1jHuhi5KEt3gjygjgsxI1XE8r0aeaO" //c
      }),
      Users.create({
        username: "ChristopherMiller",
        password: "$2b$10$NSU6xf5Z3PyYW9lG4f6gAOx1jHuhi5KEt3gjygjgsxI1XE8r0aeaO" //c
      }),
      // CATEGORIES
      Category.create({
        name: "Home",
        description: "Placeholder text to see if it gets rendered",
        picture:
          "https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      }),
      Category.create({
        name: "Electronics",
        description: "Placeholder text to see if it gets rendered",
        picture:
          "https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }),
      Category.create({
        name: "Plants and Gardening",
        description: "Placeholder text to see if it gets rendered",
        picture:
          "https://images.pexels.com/photos/1600130/pexels-photo-1600130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }),
      Category.create({
        name: "Fashion",
        description: "Placeholder text to see if it gets rendered",
        picture:
          "https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      }),
      Category.create({
        name: "Sporting Goods",
        description: "Placeholder text to see if it gets rendered",
        picture:
          "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      }),
      Category.create({
        name: "Movies, music and games",
        description: "Placeholder text to see if it gets rendered",
        picture:
          "https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      }),
      // PRODUCTS
      Products.create({
        name: "Dinner table",
        picture:
          "https://picsum.photos/536/354",
          price: 199,
        description: "Product text",
        color: 'brown',
        userId: 1,
        categoryId: 1
      }),
      Products.create({
        name: "Succulent",
        picture:
          "https://picsum.photos/536/354",
          price: 15,
        description: "Product text",
        color: 'green',
        userId: 3,
        categoryId: 2
      })
    ])
  )
  .then(() => console.log("--- Database is seeded ---"))
  .catch(console.error);
