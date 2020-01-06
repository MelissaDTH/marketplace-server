const { Router } = require("express");
const Comments = require("./model");
const authentication = require("../authentication/middleware");

const router = new Router();

router.get("/comments", (_req, res, next) => {
  Comments.findAll()
    .then(events => {
      res.send(events);
    })
    .catch(next);
});

router.post("/comments", authentication, (req, res, next) => {
  const { comment, ticketId } = req.body;
  const userId = req.user.id;
  Comments.create({ comment, ticketId, userId })
    .then(ticket => res.json(ticket))
    .catch(next);
});

module.exports = router;
