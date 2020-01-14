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
        description: "When it comes to home improvement, look no further than the home and garden pages of Marketplace. A wide range of home goods are just a mouse click away.",
        picture:
          "https://images.pexels.com/photos/1648839/pexels-photo-1648839.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      }),
      Category.create({
        name: "Electronics",
        description: "Keep up with the latest in electronics and technology and save money with great deals. Shop with confidence and find the electronics you want for a great price on Marketplace.",
        picture:
          "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      }),
      Category.create({
        name: "Plants and Gardening",
        description: "Plants are a great way to make your house a better space to live in. You’ll find everything you need in and around your home to make it uniquely your own.",
        picture:
          "https://images.pexels.com/photos/1382394/pexels-photo-1382394.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      }),
      Category.create({
        name: "Fashion",
        description: "Take the strain out of shopping with Marketplace. Find great deals on fashionable jeans, sweaters, suits and that look sharp and stylish.",
        picture:
          "https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      }),
      Category.create({
        name: "Sporting Goods",
        description: "Are you ready to play like a pro? No matter what your favorite sport is, Marketplace has the equipment you need to perform at your peak.",
        picture:
          "https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      }),
      Category.create({
        name: "Movies, music and books",
        description: "Turn your home into a theater-like experience with a new or refurbished TV by Samsung, LG, or Sharp. Or up your game with a new or refurbished video game console like the PS4 or Xbox One.",
        picture:
          "https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }),
      // PRODUCTS
      Products.create({
        name: "Brown Wooden Dinner Table with Ceramic Plate",
        picture:
          "https://images.pexels.com/photos/154161/pexels-photo-154161.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          price: 399,
        description: "Selling a nearly perfect table with a ceramic plate, I put a bowl with lettuce on it just for show. Not selling this plate!",
        color: 'brown',
        userId: 1,
        categoryId: 1
      }),
      Products.create({
        name: "White Lamp with black Lamp Base",
        picture:
          "https://images.pexels.com/photos/707579/pexels-photo-707579.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          price: 54,
        description: "A white lamp that has to go because we have bought new black lamps. This does not fit our interior anymore, they are almost new and have been use scarcely.",
        color: 'black',
        userId: 2,
        categoryId: 1
      }),
      Products.create({
        name: "New Silver iPhone X With Airpods",
        picture:
          "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          price: 850,
        description: "A silver iPhone X, I want to buy the newer version that came out last month. I've had this one for three months, so it's very new. It has been in the case since purchase, so it is practically unused.",
        color: 'grey',
        userId: 3,
        categoryId: 2
      }),
      Products.create({
        name: "PSVR (Playstation Virtual Reality) Headset",
        picture:
          "https://images.pexels.com/photos/3391378/pexels-photo-3391378.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          price: 250,
        description: "My son's Playstation VR Headset has to go. He barely has time for his family or his homework, we gave him an ultimatum and eventually he decided to keep living with us and to sell the headset",
        color: 'white',
        userId: 2,
        categoryId: 2
      }),
      Products.create({
        name: "iMac 21'' Slim (2019)",
        picture:
          "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          price: 1150,
        description: "I found out that this programming thing that everyone is talking about and doing bootcamps for,  is not my thing. All the debugging and learning, I don't understand why anyone would be able to do this. So, I'm selling my iMac.",
        color: 'white',
        userId: 5,
        categoryId: 2
      }),
      Products.create({
        name: "Sony PSP Playstation Handheld",
        picture:
          "https://images.pexels.com/photos/1435595/pexels-photo-1435595.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          price: 350,
        description: "There have been no new games for the Sony PSP that cam out that I liked. Actually, are they still made because I couldn't find any the last couple of years. It's still a great handheld to keep in your hand though, so it's a great purchase.",
        color: 'black',
        userId: 4,
        categoryId: 2
      }),
      Products.create({
        name: "Two Playstation 4 Dualshock Controllers",
        picture:
          "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          price: 250,
        description: "The Playstation 5 will be coming to the market in the end of year 2020, so I'm already selling all my Playstation 4 stuff (and FIFA20 as well, I hate all the rage quiting it makes me do) to prepare for the PS5 release.",
        color: 'black',
        userId: 2,
        categoryId: 2
      }),
      Products.create({
        name: "Succulent Plant Trio for Indoor",
        picture:
          "https://images.pexels.com/photos/796620/pexels-photo-796620.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          price: 15,
        description: "These indoor succulents come with three plants, without any pots. They are only suitable for indoor life.",
        color: 'green',
        userId: 5,
        categoryId: 3
      }),
      Products.create({
        name: "Orange 25 cm Indoor Plant Pot",
        picture:
          "https://images.pexels.com/photos/1533960/pexels-photo-1533960.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          price: 10,
        description: "A new pot for small sized plants. Has never been used, this purchase will be without the plant.",
        color: 'orange',
        userId: 4,
        categoryId: 3
      })

    ])
  )
  .then(() => console.log("--- Database is seeded ---"))
  .catch(console.error);
