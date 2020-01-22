const { Router } = require("express");
const Comments = require("./model");
const Products = require("../products/model");
const Users = require("../users/model")
const authentication = require("../authentication/middleware");

const router = new Router();

router.get(
  "/products/:productId/comments/",
  async (request, response, next) => {
    try {
      const comments = await Comments.findAll({
        where: { productId: request.params.productId },
        order: [["id", "DESC"]],
        include: [Users]
      });
      response.status(200).send(comments);
    } catch (error) {
      next(error);
    }
  }
);

// router.post("/comments", authentication, async (request, response, next) => {
//   try {
//     const userId = toData(request.body.jwt).userId;

//     const comment = {
//       content: request.body.content,
//       ticketId: request.body.ticketId,
//       userId: userId
//     };

//     const author = await User.findByPk(userId);

//     const newComment = await Comment.create(comment);
//     console.log("AUTHOR TEST", author);
//     response.send({ comment: newComment, author: author.dataValues.username });
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
