const { Router } = require("express");
const Products = require("./model");
const Users = require("../users/model");
const authentication = require("../authentication/middleware");
const Categories = require("../categories/model");
const Comments = require("../comments/model");
const { toData } = require("../authentication/jwt");

const router = new Router();

async function calculateProductRisk(product) {
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

router.get(
  "/category/:categoryId/products/",
  async (request, response, next) => {
    try {
      const products = await Products.findAll({
        where: { categoryId: request.params.categoryId },
        order: [["id", "DESC"]],
        include: [Comments, Users, Categories]
      });
      // products.dataValues.risk = await calculateProductRisk(products)
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
      include: [Comments, Users]
    });
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
        categoryId
      });
      response.send(newProduct);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
