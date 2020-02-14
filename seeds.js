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

      // USERS
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
        password: "$2b$10$NSU6xf5Z3PyYW9lG4f6gAOx1jHuhi5KEt3gjygjgsxI1XE8r0aeaO" //c,
      }),
      Users.create({
        username: "Heroku747",
        password: "$2b$10$JZ5ItMKfLxlFbTUu9d.bA.Evar83Esj7gXXKcJ5RJhto9Epgt9bQe" //bram
      }),
      Users.create({
        username: "Crazy377",
        password: "$2b$10$VtM.I0WO2LbDTbbAHvMavu6IL4AmoOyojXf6gjnjsSB3THQ8qYH2q" //mel
      }),
      Users.create({
        username: "Beastie Boy",
        password: "$2b$10$Eu2AyBWuFSf.uYH3nj4yfePj8e.rHfGYWHRbOa5EBJgkvbK4lPQG2" //am
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
        name: "Three Pillows Good Quality Wool",
        picture:
          "https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          price: 35,
        description: "Selling three great pillows because they are not compatible with the rest of the house anymore. It was styled by free by an tv-stylist, but we didn't like it so it all has to go.",
        color: 'black, orange and blue',
        userId: 5,
        categoryId: 1
      }),
      Products.create({
        name: "White Lamp with a White Base",
        picture:
          "https://images.pexels.com/photos/545048/pexels-photo-545048.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          price: 54,
        description: "A white lamp that has to go because we have bought new black lamps. This does not fit our interior anymore, they are almost new and have been use scarcely.",
        color: 'white',
        userId: 2,
        categoryId: 1
      }),
      Products.create({
        name: "New White Kitchen",
        picture:
          "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          price: 3575,
        description: "A white kitchen that does not match our interior anymore. The dining area is also included, but our style has changed to the color orange now. It's an entirely new kitchen, has been used for 3 years.",
        color: 'white',
        userId: 2,
        categoryId: 1
      }),
      Products.create({
        name: "New Silver iPhone X ",
        picture:
          "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          price: 850,
        description: "A silver iPhone X, I want to buy the newer version that came out last month. I've had this one for three months, so it's very new. It has been in the case since purchase, so it is practically unused.",
        color: 'grey',
        userId: 3,
        categoryId: 2
      }),
      Products.create({
        name: "PSVR (Playstation) Headset",
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
        name: "Sony PSP Handheld",
        picture:
          "https://images.pexels.com/photos/1435595/pexels-photo-1435595.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          price: 350,
        description: "There have been no new games for the Sony PSP that cam out that I liked. Actually, are they still made because I couldn't find any the last couple of years. It's still a great handheld to keep in your hand though, so it's a great purchase.",
        color: 'black',
        userId: 4,
        categoryId: 2
      }),
      Products.create({
        name: "2 PS4 Dualshock Controllers",
        picture:
          "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          price: 250,
        description: "The Playstation 5 will be coming to the market in the end of year 2020, so I'm already selling all my Playstation 4 stuff (and FIFA20 as well, I hate all the rage quiting it makes me do) to prepare for the PS5 release.",
        color: 'black',
        userId: 2,
        categoryId: 2
      }),
      Products.create({
        name: "Succulent Indoor Plant",
        picture:
          "https://images.pexels.com/photos/1284879/pexels-photo-1284879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          price: 15,
        description: "These indoor succulents come with three plants, without any pots. They are only suitable for indoor life, but make up for this in cuteness.",
        color: 'green',
        userId: 5,
        categoryId: 3
      }),
      Products.create({
        name: "Orange 25 cm Indoor Pot",
        picture:
          "https://images.pexels.com/photos/793012/pexels-photo-793012.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          price: 10,
        description: "A pot for small sized plants. It's the first one on the left. Has never been used, this purchase will be without the plant.",
        color: 'orange',
        userId: 4,
        categoryId: 3
      }),
      Products.create({
        name: "Blue Denim Jeans",
        picture:
          "https://images.pexels.com/photos/2244951/pexels-photo-2244951.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          price: 95,
        description: "These blue denim jeans come in different sizes and different colors. Check our website for more information and to see all the available jeans on offer and sale.",
        color: 'blue',
        userId: 8,
        categoryId: 4
      }),
      Products.create({
        name: "Yellow Vans Sneakers",
        picture:
          "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          price: 215,
        description: "These are limited edition Vans Sneakers, from line #359. They have never been on my feet, only took them out of the box for the photo. I got 30 pair of them (bought the whole line all in once), so I can offer them pretty cheap if you ask me.",
        color: 'yellow',
        userId: 7,
        categoryId: 4
      }),
      Products.create({
        name: "Longboard Used Two Times",
        picture:
          "https://images.pexels.com/photos/1018483/pexels-photo-1018483.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          price: 105,
        description: "This longboard was a bad Christmas gift, I have used it for two times now and it's really not my thing. Hopefully I can make someone else very happy with this.",
        color: 'red, black and grey',
        userId: 6,
        categoryId: 5
      }),
      Products.create({
        name: "Lea Este Libro Book",
        picture:
          "https://images.pexels.com/photos/2148215/pexels-photo-2148215.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          price: 15,
        description: "This Lea Este Libro Si Desea Tomar Buenas Fotografias Book is great. Keep it in your book case and never read it, or read it een though you don't know the language. Possibilities are endless.",
        color: 'brown',
        userId: 7,
        categoryId: 6
      }),

      // CREATE COMMENTS
      Comments.create({
        comment: "These look too good to be true",
        productId: 1,
        userId: 1,
      }),
      Comments.create({
        comment: "These aren't made of wool?!",
        productId: 1,
        userId: 7,
      }),
      Comments.create({
        comment: "Can I see your receipt?",
        productId: 1,
        userId: 8,
      }),
      Comments.create({
        comment: "These pillows look great, I am definitely interested in at least 3 x 3 of them! ",
        productId: 1,
        userId: 3,
      }),
      Comments.create({
        comment: "I am very interested in this lamp, will you be able to take some off the price because I am going on holidays.",
        productId: 2,
        userId: 5,
      }),
      Comments.create({
        comment: "These pillows will look great on my red couch, I am definitely going to buy them from you.",
        productId: 1,
        userId: 2,
      }),
      Comments.create({
        comment: "I think programming is great, especially on an iMac from 2019. I am going to buy this!",
        productId: 6,
        userId: 3,
      }),
      Comments.create({
        comment: "It will take a while before the PS5 has enough games to be fun, so I'll stick to my PS4 for now and buy new controllers.",
        productId: 8,
        userId: 5,
      }),
      Comments.create({
        comment: "This VR thingy looks great, I think I need it",
        productId: 5,
        userId: 1,
      }),
      Comments.create({
        comment: "Going back in time with a PSP, that's awesome. I want it!",
        productId: 7,
        userId: 3,
      }),
      Comments.create({
        comment: "This is one of the best devices ever, I am buying one.",
        productId: 7,
        userId: 7,
      }),
      Comments.create({
        comment: "I would love to have an unused iPhone for this price, sold!",
        productId: 3,
        userId: 6,
      }),
      Comments.create({
        comment: "Ah, cute! This pot has to be in my collection.",
        productId: 10,
        userId: 8,
      }),
      Comments.create({
        comment: "This succulent looks great, it will brighten up my house. I'm putting it in my cart as I type.",
        productId: 9,
        userId: 7,
      }),
      Comments.create({
        comment: "It looks like it is used more than just two times, buddy!",
        productId: 13,
        userId: 3,
      }),
      Comments.create({
        comment: "I don't think this is yellow, more ocher color?",
        productId: 12,
        userId: 1,
      }),
      Comments.create({
        comment: "This Lea Este Libro Si Desea Tomar Buenas Fotografias Book looks used...",
        productId: 14,
        userId: 1,
      })

    ])
  )
  .then(() => console.log("--- Database is seeded ---"))
  .catch(console.error);
