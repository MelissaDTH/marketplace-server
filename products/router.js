const { Router } = require("express");
const Products = require("./model");
const Users = require("../users/model");
const authentication = require("../authentication/middleware");
const Categories = require("../categories/model");
const Comments = require("../comments/model");
const Sequelize = require("sequelize");
// const { toData } = require("../authentication/jwt");

const router = new Router();

async function calculateProductRisk(product) {
  // INITIAL RISK
  let risk = 10;

  // Calculating the amount of product(s) by author
  const allProductsFromAuthor = await Comments.count({
    include: [Users],
    where: [{ userId: product.id }],
    col: "userId",
  });

  if (allProductsFromAuthor === 1) {
    risk += 10;
  }

  // Number of comments on product
  const commentsOnProduct = await Comments.count({
    include: [Products],
    where: [{ productId: product.id }],
    col: "productId",
  });

  if (commentsOnProduct > 3) {
    risk += 10;
  }

  // minimum & maximum risk
  if (risk <= 5) {
    risk = 10;
  }
  if (risk > 95) {
    risk = 95;
  }

  // CREATED AT STAMP -- BUSINESS HOURS
  // product.createdAt.getHours()

  return risk;
}

router.get(
  "/category/:categoryId/products/",
  async (request, response, next) => {
    try {
      const products = await Products.findAll({
        where: { categoryId: request.params.categoryId },
        order: [["id", "DESC"]],
        include: [Comments, Users, Categories],
      });
      response.status(200).send(products);
    } catch (error) {
      next(error);
    }
  }
);

router.get("/products/:productId", async (request, response, next) => {
  try {
    const product = await Products.findOne({
      where: { id: request.params.productId },
      include: [Comments, Users],
    });
    const riskCalculator = await calculateProductRisk(product);
    product.setDataValue("risk", riskCalculator);

    response.send(product);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/category/:categoryId/products/",
  authentication,
  async (request, response, next) => {
    try {
      const { name, picture, price, color, description } = request.body;
      const { categoryId } = request.params;
      const userId = request.user.id;

      const newProduct = await Products.create({
        name,
        picture,
        price,
        picture,
        color,
        description,
        userId,
        categoryId,
      });
      response.send(newProduct);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
