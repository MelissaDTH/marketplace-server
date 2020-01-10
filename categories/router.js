const { Router } = require("express");
const Categories = require("./model");
// const authentication = require("../authentication/middleware");
const Products = require("../products/model")

const router = new Router();

router.get("/category", (_req, res, next) => {
  Categories.findAll()
    .then(Categories => {
      res.send(Categories);
    })
    .catch(next);
});

router.post("/category", (req, res, next) => {
  Categories.create(req.body)
    .then(category => res.json(category))
    .catch(next);
});

router.get("/category/:id", (req, res, next) => {
  Categories.findByPk(req.params.id, { include: [Products]})
  .then(category => {
    if (!category) {
      return res.status(404).send({
        message: "This category is not found"
      });
    } else {
      res.status(200).send(category);
    }
  })

  .catch(err => next(err));
});

module.exports = router;
