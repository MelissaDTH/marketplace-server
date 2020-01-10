const { Router } = require("express");
const Products = require("./model");
// const authentication = require("../authentication/middleware");
const Categories = require("../categories/model");
const Comments = require("../comments/model");
const Sequelize = require("sequelize");

const router = new Router();

async function calculateproductRisk(product) {
  // INITIAL RISK
  let risk = 5;

  // NUMBER OF PRODUCTS OF SELLER
  // Calculating function for amount of product(s) by author
  const allProductsFromAuthor = await Products.count({
    where: { userId: product.userId }
  });
  if (allProductsFromAuthor === 1) {
    risk += 10;
  }

  // NUMBER OF COMMENTS ON product
  const commentsOnProduct = await Comments.count({
    where: { productId: product.id }
  });
  if (commentsOnProduct > 3) {
    risk += 5;
  }

  // PRICE DIFFERENCE
  // The difference between the product price and the average product price in % is the amount added/reduced to/from risk
  // Calculating average price for the product of that event
  let averagePrice = await Products.findAll({
    where: { eventId: product.eventId },
    attributes: [[Sequelize.fn("AVG", Sequelize.col("price")), "price"]]
  });

  averagePrice = parseFloat(averagePrice[0].dataValues.price);
  console.log("AVERAGE product price???", averagePrice);
  // SW EXAMPLE: average = 9 (andere = 10)

  // The price of 1 product, PARSE.FLOAT for number
  priceproduct = parseFloat(product.price);
  // SW EXAMPLE: 8
  //returns absolute numbers MATH.abs -- verschil in prijzen
  const priceDifferenceInt = Math.abs(averagePrice - priceproduct);
  // SW EXAMPLE: 1

  //returns rounded numbers MATH.round -- prijs verschil in percentage
  let priceDifferencePercent = Math.round(
    (priceDifferenceInt / averagePrice) * 100
  );
  // SW EXAMPLE: 1 / 9 = 0,1
  // SW EXAMPLE: 100 X 0,1 == 11,1

  // EXAMPLE: product price difference is 11% with average price
  // THEN: DECIDE IF its 11% higher or 11% lower than average
  if (priceproduct < averagePrice) {
    // DUS: verkoop prijs is lager, dus risk OMHOOG
    risk += priceDifferencePercent;
  } else {
    // Sell price increased = Risk OMLAAG
    if (priceDifferencePercent > 10) priceDifferencePercent = 10;

    risk -= priceDifferencePercent;
  }

  // minimum & maximum risk
  if (risk <= 5) {
    risk = 5;
  }
  if (risk > 95) {
    risk = 95;
  }

  // CREATEDAT STAMP -- BUSINESS HOURS
  // product.createdAt.getHours()

  return risk;
}

// router.get("/category/:id/products", (_req, res, next) => {
//   Products.findAll()
//     .then(products => {
//       res.send(products);
//     })
//     .catch(next);
// });

// Deconstructing from the request body to use it to create product + can use userId here because of auth
// router.post('/category/:id/products', (req, res, next) => {
//   const { name, author, picture, price, description, eventId } = req.body;
//   const userId = req.user.id;
//   Products.create({ name, author, picture, price, description, userId, eventId })
//     .then(product => res.json(product))
//     .catch(next);
// });

router.get("/category/:categoryId/products/", async (req, res, next) => {
  try {
    const products = await Products.findAll({
      where: { categoryId: req.params.categoryId },
      order: [["id", "DESC"]],
      include: [Comments]
    });
    res.status(200).send(products);
  } catch (error) {
    next(error);
  }
});

module.exports = router;