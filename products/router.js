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
    risk += 10;
  }

  // CREATED AT BUSINESS HOURS
  const businesshours = product.createdAt.getHours();
  if (businesshours >= 9 && businesshours <= 17) {
    risk -= 10;
  } else {
    risk += 10;
  }

  // MINIMUM & MAXIMUM RISK
  if (risk <= 5) {
    risk = 5;
  }
  if (risk > 95) {
    risk = 95;
  }
  return risk;
}

// GET ALL PRODUCTS
router.get(
  "/category/:categoryId/products/",
  async (request, response, next) => {
    try {
      const products = await Products.findAll({
        where: { categoryId: request.params.categoryId },
        order: [["id", "DESC"]],
        include: [Comments, Users, Categories]
      });
      response.status(200).send(products);
    } catch (error) {
      next(error);
    }
  }
);

// GET ONE PRODUCT
router.get("/products/:productId", async (request, response, next) => {
  try {
    const product = await Products.findOne({
      where: { id: request.params.productId },
      include: [Comments, Users]
    });
    product.dataValues.risk = await calculateProductRisk(product);
    response.send(product);
  } catch (error) {
    next(error);
  }
});

// POST A PRODUCT
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

// EDIT A PRODUCT
router.put("/edit/products/:productId", async (request, response, next) => {
  try {
    const product = await Products.findByPk(request.params.productId);
    if (product) {
      product.update(request.body);
    } else {
      response.status(404).end();
    }
  } catch (error) {
    next(error);
  }
});

// DELETE PRODUCT
router.delete("/products/:productId", async (request, response, next) => {
  try {
    const product = await Products.findByPk(request.params.productId, {
      include: [Comments]
    });
    if (product) {
      await product.destroy();
      response.status(204).end();
    } else {
      response.status(404).end();
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
