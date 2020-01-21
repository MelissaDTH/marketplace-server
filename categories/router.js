const { Router } = require("express");
const Categories = require("./model");
const Products = require("../products/model");

const router = new Router();

router.get("/category", (_request, response, next) => {
  Categories.findAll()
    .then(Categories => {
      response.send(Categories);
    })
    .catch(next);
});

router.post("/category", (request, response, next) => {
  Categories.create(request.body)
    .then(category => response.json(category))
    .catch(next);
});

router.get("/category/:categoryId", (request, response, next) => {
  Categories.findByPk(request.params.categoryId, { order: [["id", "ASC"]] }, {
    include: [Products]
  })
    .then(category => {
      if (!category) {
        return response.status(404).send({
          message: "This category is not found"
        });
      } else {
        response.status(200).send(category);
      }
    })

    .catch(err => next(err));
});

module.exports = router;
