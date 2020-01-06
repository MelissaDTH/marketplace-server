const { Router } = require("express");
const { toJWT } = require("./jwt");
const Users = require("../users/model");
const bcrypt = require("bcrypt");
const auth = require("./middleware");

const router = new Router();

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    res.status(400).send({
      message: "Please supply a valid username and password"
    });
  } else {
    Users.findOne({
      where: { username: username }
    })
      .then(entity => {
        if (!entity) {
          res.status(400).send({
            message: "Those credentials don't exist"
          });
        } else if (bcrypt.compareSync(password, entity.password)) {
          res.send({
            jwt: toJWT({ userId: entity.id })
          });
        } else {
          res.status(400).send({
            message: "Password or username is incorrect"
          });
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).send({
          message: "something went wrong on the server-side"
        });
      });
  }
});

module.exports = router;
