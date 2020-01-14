const { Router } = require("express");
const Comments = require("./model");
const authentication = require("../authentication/middleware");

const router = new Router();

router.get("/comments", async (request, response, next) => {
  try {
    const comments = await Comment.findAll();
    response.send(comments);
  } catch (error) {
    next(error);
  }
});

router.post("/comments", authentication, async (request, response, next) => {
  try {
    const userId = toData(request.body.jwt).userId;

    const comment = {
      content: request.body.content,
      ticketId: request.body.ticketId,
      userId: userId
    };

    const author = await User.findByPk(userId);

    const newComment = await Comment.create(comment);
    console.log("AUTHOR TEST", author);
    response.send({ comment: newComment, author: author.dataValues.username });
  } catch (error) {
    next(error);
  }
});


router.post("/products/:productId/comments", authentication, (request, response, next) => {
  const { comment, ticketId } = request.body;
  const userId = request.user.id;
  Comments.create({ comment, ticketId, userId })
    .then(ticket => response.json(ticket))
    .catch(next);
});

module.exports = router;
